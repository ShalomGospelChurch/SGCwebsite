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

// Semplice logica per lo slider "Chi Siamo"
const slider = document.getElementById('about-slider');
if (slider) {
    let index = 0;
    const images = slider.querySelectorAll('img');

    setInterval(() => {
        index++;
        if (index >= images.length) index = 0;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }, 4000); // Cambia immagine ogni 4 secondi
}

// Imposta l'anno corrente nel footer
document.getElementById('currentYear').textContent = new Date().getFullYear();