# Shalom Gospel Church - Website

Chiesa Evangelica Cristiana che serve la comunità singalese a Milano e Verona dal 2005.

## 🌐 Struttura Multilingua SEO-Ottimizzata

Il sito è strutturato con pagine separate per ogni lingua per massimizzare la SEO:

- **`/` (root)** - Versione Italiana (lingua predefinita)
- **`/en/`** - Versione Inglese
- **`/si/`** - Versione Sinhala (Sri Lanka)

### Vantaggi SEO:
- ✅ Ogni lingua ha una URL unica e indicizzabile
- ✅ Tag `hreflang` corretti per il targeting geografico
- ✅ Contenuto statico HTML (niente JavaScript per le traduzioni)
- ✅ Meta description e title ottimizzati per lingua
- ✅ Google può indicizzare correttamente ogni versione linguistica

## 📁 Struttura File

```
SGCwebsite/
├── index.html              # Homepage Italiana
├── en/
│   └── index.html         # Homepage Inglese
├── si/
│   └── index.html         # Homepage Sinhala
├── css/
│   └── style.css          # Stili personalizzati
├── js/
│   ├── main.js           # Funzionalità principali (sticky nav, video)
│   ├── youtube.js        # Caricamento video YouTube
│   └── i18n.js           # (deprecato - non più utilizzato)
├── data/
│   └── videos.json       # Configurazione video YouTube
├── media/
│   ├── logo.png
│   ├── headerVideo.mp4
│   └── favicon/
├── locales/              # (deprecato - JSON non più utilizzati)
│   ├── en.json
│   ├── it.json
│   └── si.json
└── manifest.json         # PWA manifest
```

## 🚀 Tecnologie Utilizzate

- **HTML5** - Markup semantico
- **Tailwind CSS** - Framework CSS utility-first
- **JavaScript Vanilla** - Senza framework, leggero e veloce
- **Font Awesome** - Icone
- **Google Fonts** - Inter per IT/EN, Noto Sans Sinhala per SI
- **YouTube API** - Embedding video

## 🎨 Features

- ✨ Design moderno e responsivo
- 📱 Mobile-first approach
- 🎥 Video header con fallback
- 📺 Integrazione YouTube per sermoni e live stream
- 🌍 Supporto multilingua SEO-friendly
- 🔍 Ottimizzato per motori di ricerca
- ⚡ Performance ottimizzate
- 🎯 PWA ready

## 📝 Come Aggiungere Contenuti

### Aggiungere/Modificare Video YouTube

Modifica il file `data/videos.json`:

```json
{
  "videos": [
    {
      "id": "VIDEO_ID",
      "type": "live",
      "customThumbnail": "url-immagine-opzionale"
    }
  ]
}
```

### Modificare Testi

Modifica direttamente i file HTML nelle rispettive directory:
- Italiano: `/index.html`
- Inglese: `/en/index.html`
- Sinhala: `/si/index.html`

## 🌐 Deployment

Il sito è configurato per essere deployato su:
- GitHub Pages
- Netlify
- Vercel
- Qualsiasi hosting statico

### Link Produzione
- IT: `https://shalomgospelchurch.it/`
- EN: `https://shalomgospelchurch.it/en/`
- SI: `https://shalomgospelchurch.it/si/`

## 📧 Contatti

- **Milano**: Via Socrate 71/3, 20128 Milano
- **Verona**: Via G. Morgagni 2, 37135 Verona
- **Tel**: +39 328 418 8515
- **Email**: info@shalomgospelchurch.it

## 📱 Social Media

- [Facebook](https://www.facebook.com/people/Shalom-Gospel-Church/61575921363341/)
- [Instagram](https://www.instagram.com/shalomgospelchurch)
- [YouTube](https://www.youtube.com/@ShalomGospelChurch)

---

© 2005 - 2026 Shalom Gospel Church. Tutti i diritti riservati.
