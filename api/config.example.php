<?php
// Copia questo file in config.php (NON versionato in git) e inserisci i tuoi dati.
// config.php va caricato via FTP direttamente sul server, senza passare da git.

return [
    // Google Cloud Console -> Credenziali -> Chiave API
    // Restrizioni consigliate: "Restrizioni API" -> solo "YouTube Data API v3"
    // (non serve restrizione per referrer/IP: la chiave resta lato server)
    'api_key' => 'INSERISCI_LA_TUA_API_KEY',

    // ID del canale YouTube (inizia con "UC...").
    // Si trova in: YouTube Studio -> Impostazioni -> Canale -> Info di base -> ID canale
    'channel_id' => 'INSERISCI_IL_CHANNEL_ID',
];
