// ============================================
// *YOUTUBE.JS - YouTube API Integration
// ============================================
// TEMPORARILY DISABLED - Using manual video embed instead
// Uncomment when you have the API key ready

/*
// PASTE YOUR YOUTUBE API KEY HERE
const YOUTUBE_API_KEY = 'YOUR_API_KEY_HERE';  // ← Replace with your actual API key
const CHANNEL_ID = 'UCxOD_MrycVgd3hUxIc1Y7Gg';  // Shalom Gospel Church channel ID

async function loadLatestVideo() {
    // If API key is not set, show error message
    if (YOUTUBE_API_KEY === 'YOUR_API_KEY_HERE') {
        document.getElementById('videoLoading').classList.add('hidden');
        document.getElementById('videoError').classList.remove('hidden');
        return;
    }
    
    try {
        // Fetch latest video from channel
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1&type=video`
        );
        
        if (!response.ok) {
            throw new Error('Failed to fetch video');
        }
        
        const data = await response.json();
        
        if (data.items && data.items.length > 0) {
            const latestVideo = data.items[0];
            const videoId = latestVideo.id.videoId;
            const videoTitle = latestVideo.snippet.title;
            
            // Create video embed
            const videoHTML = `
                <div class="relative" style="padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 1rem;">
                    <iframe 
                        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                        src="https://www.youtube.com/embed/${videoId}" 
                        title="${videoTitle}"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <div class="mt-6 text-center">
                    <h3 class="text-2xl font-bold text-white mb-2">${videoTitle}</h3>
                    <p class="text-gray-400">${new Date(latestVideo.snippet.publishedAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                    })}</p>
                </div>
            `;
            
            // Insert video
            document.getElementById('videoPlayer').innerHTML = videoHTML;
            document.getElementById('videoLoading').classList.add('hidden');
            document.getElementById('videoPlayer').classList.remove('hidden');
        } else {
            // No videos found
            document.getElementById('videoLoading').classList.add('hidden');
            document.getElementById('videoError').classList.remove('hidden');
        }
    } catch (error) {
        console.error('Error loading video:', error);
        document.getElementById('videoLoading').classList.add('hidden');
        document.getElementById('videoError').classList.remove('hidden');
    }
}

// Load video when page loads
window.addEventListener('load', loadLatestVideo);
*/

// ============================================
//* MANUAL VIDEO EMBED (Temporary Solution)
// ============================================
// For now, just hide loading and show the manual embed section

window.addEventListener('load', () => {
    const videoLoading = document.getElementById('videoLoading');
    const videoError = document.getElementById('videoError');
    
    if (videoLoading) {
        videoLoading.classList.add('hidden');
    }
    
    if (videoError) {
        videoError.classList.remove('hidden');
    }
});