<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

$configFile = __DIR__ . '/config.php';
if (!is_file($configFile)) {
    http_response_code(500);
    echo json_encode(['error' => 'config.php mancante. Copia config.example.php in config.php e inserisci api_key e channel_id.']);
    exit;
}

$config = require $configFile;
$apiKey = $config['api_key'];
$channelId = $config['channel_id'];

$cacheFile = __DIR__ . '/cache/videos.json';
$cacheTtl = 600; // 10 minuti: evita di consumare la quota API ad ogni visita

if (is_file($cacheFile) && (time() - filemtime($cacheFile)) < $cacheTtl) {
    readfile($cacheFile);
    exit;
}

function ytGet(string $url): ?array
{
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 8,
        CURLOPT_SSL_VERIFYPEER => true,
    ]);
    $response = curl_exec($ch);
    $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($response === false || $status !== 200) {
        return null;
    }

    $decoded = json_decode($response, true);
    return is_array($decoded) ? $decoded : null;
}

$videos = [];
$videoIds = [];

// 1. Live in corso sul canale (query costosa in quota: per questo è cache-ata)
$liveUrl = 'https://www.googleapis.com/youtube/v3/search'
    . '?part=id'
    . '&channelId=' . urlencode($channelId)
    . '&eventType=live'
    . '&type=video'
    . '&key=' . urlencode($apiKey);

$live = ytGet($liveUrl);
foreach ($live['items'] ?? [] as $item) {
    $id = $item['id']['videoId'] ?? null;
    if ($id && !in_array($id, $videoIds, true)) {
        $videos[] = ['id' => $id, 'type' => 'live', 'customThumbnail' => null];
        $videoIds[] = $id;
    }
}

// 2. Ultimi video caricati (playlist "uploads" del canale, economica in quota)
$channelUrl = 'https://www.googleapis.com/youtube/v3/channels'
    . '?part=contentDetails'
    . '&id=' . urlencode($channelId)
    . '&key=' . urlencode($apiKey);

$channel = ytGet($channelUrl);
$uploadsPlaylistId = $channel['items'][0]['contentDetails']['relatedPlaylists']['uploads'] ?? null;

if ($uploadsPlaylistId !== null) {
    $playlistUrl = 'https://www.googleapis.com/youtube/v3/playlistItems'
        . '?part=contentDetails'
        . '&playlistId=' . urlencode($uploadsPlaylistId)
        . '&maxResults=9'
        . '&key=' . urlencode($apiKey);

    $playlist = ytGet($playlistUrl);
    foreach ($playlist['items'] ?? [] as $item) {
        if (count($videos) >= 9) {
            break;
        }
        $id = $item['contentDetails']['videoId'] ?? null;
        if ($id && !in_array($id, $videoIds, true)) {
            $videos[] = ['id' => $id, 'type' => 'video', 'customThumbnail' => null];
            $videoIds[] = $id;
        }
    }
}

$videos = array_slice($videos, 0, 9);

$payload = json_encode(['videos' => $videos], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);

$cacheDir = dirname($cacheFile);
if (!is_dir($cacheDir)) {
    mkdir($cacheDir, 0755, true);
}
file_put_contents($cacheFile, $payload);

echo $payload;
