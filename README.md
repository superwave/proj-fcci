# FCCI Website - Pure HTML/JavaScript Implementation

## Overview

This is a 1:1 recreation of the FCCI (Foundation for Commerce and Culture Interchange) website using pure HTML, vanilla JavaScript, and CSS - no frameworks or libraries.

**Original Website:** https://www.fcci.org.tw/

## Features

- ✅ Single Page Application (SPA) with custom routing
- ✅ Bilingual support (Chinese/English)
- ✅ Responsive design for mobile, tablet, and desktop
- ✅ Image carousel with auto-play
- ✅ News articles system
- ✅ Contact form with validation
- ✅ SEO-friendly URLs
- ✅ File-based content management (JSON)

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables
- **Vanilla JavaScript** - No frameworks or libraries
- **JSON** - Content data storage

## Project Structure

```
proj_fcci/
├── index.html              # Main entry point
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   ├── app.js             # Application initialization
│   ├── router.js          # SPA routing system
│   ├── i18n.js            # Internationalization
│   └── components.js      # Reusable UI components
├── data/
│   ├── config.json        # Site configuration
│   ├── pages.json         # Static page content
│   └── news.json          # News articles data
├── images/
│   ├── banners/           # Homepage carousel images
│   ├── news/              # News article thumbnails
│   ├── gallery/           # Event gallery photos
│   ├── partners/          # Partner logos
│   └── icons/             # Country/project icons
└── README.md
```

## Getting Started

### Local Development

1. **Start a local server:**

   Using Python:
   ```bash
   python3 -m http.server 8000
   ```

   Using Node.js:
   ```bash
   npx serve .
   ```

   Using PHP:
   ```bash
   php -S localhost:8000
   ```

2. **Open your browser:**
   ```
   http://localhost:8000
   ```

### URL Structure

- Homepage: `?page=home` or just `/`
- Static pages: `?page=about`, `?page=india`, etc.
- News articles: `?p=5079`
- Language switch: Add `&lang=en` for English

## Content Management

### Adding/Editing Pages

Edit `data/pages.json`:

```json
{
  "page_id": {
    "title_zh": "中文標題",
    "title_en": "English Title",
    "content_zh": "<p>中文內容</p>",
    "content_en": "<p>English content</p>"
  }
}
```

### Adding News Articles

Edit `data/news.json`:

```json
[
  {
    "id": 1234,
    "title_zh": "新聞標題",
    "title_en": "News Title",
    "date": "2026-01-30",
    "image": "news_image.jpg",
    "category": "news",
    "content_zh": "<p>內容...</p>",
    "content_en": "<p>Content...</p>"
  }
]
```

### Adding Images

1. Place images in the appropriate folder:
   - Banners: `images/banners/`
   - News: `images/news/`
   - Gallery: `images/gallery/`

2. Reference them in your JSON files using just the filename.

## Key Features

### SPA Routing

The custom router handles URL changes without page reloads:
- Uses `history.pushState()` for clean URLs
- Supports browser back/forward buttons
- Loads content dynamically from JSON files

### Internationalization (i18n)

- Language switching without page reload
- URL-based language parameter (`?lang=en`)
- Centralized translation management
- Automatic content switching

### Components

Reusable UI components include:
- Navbar with dropdown menus
- Footer with contact info
- Banner carousel
- News cards
- Contact form

### Responsive Design

- Mobile-first approach
- Breakpoints: 480px, 768px, 992px
- Touch-friendly navigation
- Optimized images

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- No external dependencies
- Optimized images
- CSS/JS minification ready
- Lazy loading for images

## Future Enhancements

- [ ] Add search functionality
- [ ] Implement pagination for news
- [ ] Add loading animations
- [ ] Optimize images (WebP format)
- [ ] Add service worker for offline support
- [ ] Integrate with CMS backend
- [ ] Add analytics tracking

## Content Status

⚠️ **Note:** The current JSON files contain placeholder content. The actual content from the FCCI website is being fetched and will be integrated shortly.

### TODO:
- [ ] Update `data/pages.json` with actual page content
- [ ] Update `data/news.json` with actual news articles
- [ ] Add partner logos to `images/partners/`
- [ ] Verify all images are properly loaded
- [ ] Test all navigation and language switching
- [ ] Validate contact form functionality

## License

© 2026 Foundation for Commerce and Culture Interchange. All Rights Reserved.

## Contact

For questions or issues, please contact FCCI:
- Email: info@fcci.org.tw
- Phone: +886-2-2577 7318
