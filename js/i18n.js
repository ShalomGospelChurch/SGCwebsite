// Initialize i18next
i18next
    .use(i18nextHttpBackend)
    .init({
        lng: localStorage.getItem('language') || 'en',
        fallbackLng: 'en',
        backend: {
            loadPath: 'locales/{{lng}}.json'
        }
    }, function(err, t) {
        updateContent();
    });

// Update all translated content
function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = i18next.t(key);
    });
    
    // Update language button
    const currentLang = i18next.language.toUpperCase();
    document.getElementById('currentLanguage').textContent = currentLang;
    
    // Update active language option
    document.querySelectorAll('.language-option').forEach(option => {
        if (option.getAttribute('data-lang') === i18next.language) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// Language dropdown toggle
const languageBtn = document.getElementById('languageBtn');
const languageDropdown = document.getElementById('languageDropdown');

languageBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    languageDropdown.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
    languageDropdown.classList.remove('show');
});

// Language selection
document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', (e) => {
        e.stopPropagation();
        const lang = option.getAttribute('data-lang');
        i18next.changeLanguage(lang, () => {
            localStorage.setItem('language', lang);
            updateContent();
            languageDropdown.classList.remove('show');
        });
    });
});