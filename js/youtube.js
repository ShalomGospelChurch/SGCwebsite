async function loadVideos() {
    try {
        const response = await fetch('data/videos.json');
        const data = await response.json();
        
        const videoGrid = document.getElementById('videoGrid');
        
        data.videos.forEach(video => {
            const videoCard = createVideoCard(video);
            videoGrid.appendChild(videoCard);
        });
        
    } catch (error) {
        console.error('Error loading videos:', error);
    }
}

// Create video card element
function createVideoCard(video) {
    const link = document.createElement('a');
    
    // Determine URL based on type
    link.href = video.type === 'live' 
        ? `https://www.youtube.com/live/${video.id}`
        : `https://youtu.be/${video.id}`;
    link.target = '_blank';
    link.className = 'group';
    
    // Use custom thumbnail or default YouTube thumbnail
    const thumbnailUrl = video.customThumbnail 
        ? video.customThumbnail 
        : `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
    
    // Show LIVE badge only for live videos
    const liveBadge = video.type === 'live' 
        ? `<div class="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-2">
               <i class="fas fa-circle text-xs"></i>
               <span>LIVE</span>
           </div>`
        : '';
    
    link.innerHTML = `
        <div class="relative overflow-hidden rounded-xl bg-gray-900 transition-transform duration-300 group-hover:scale-105">
            <img src="${thumbnailUrl}" 
                 alt="${video.type === 'live' ? 'Live Stream' : 'Video'}" 
                 class="w-full aspect-video object-cover"
                 onerror="this.src='https://img.youtube.com/vi/${video.id}/hqdefault.jpg'">
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <i class="fas fa-play text-white text-xl ml-1"></i>
                </div>
            </div>
            ${liveBadge}
        </div>
    `;
    
    return link;
}

// Load videos when page loads
window.addEventListener('load', loadVideos);