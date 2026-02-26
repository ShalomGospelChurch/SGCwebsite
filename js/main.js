// Sticky navbar on scroll
const stickyNav = document.getElementById('stickyNav');

window.addEventListener('scroll', () => {
    // Show navbar when scrolled past the hero logo
    if (window.scrollY > 400) {
        stickyNav.classList.add('visible');
    } else {
        stickyNav.classList.remove('visible');
    }
});

// Fallback for video if it doesn't load
const video = document.getElementById('heroVideo');
video.addEventListener('error', function() {
    const videoHeader = document.querySelector('.video-header');
    videoHeader.style.background = 'linear-gradient(135deg, #1e3a8a 0%, #60a5fa 100%)';
});