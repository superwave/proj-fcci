# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for the Foundation for Commerce and Culture Interchange (FCCI), built with pure HTML5, vanilla JavaScript (ES6), and CSS3. No frameworks, no build tools, no package manager. Recreation of https://www.fcci.org.tw/.

## Development Server

No build step required. Start a local server:

```bash
python3 -m http.server 8000
# or: npx serve .
# or: php -S localhost:8000
```

Access at `http://localhost:8000`. There is no linter, test runner, or build pipeline.

## Architecture

### Script Loading Order (all pages follow this)

```
window.BASE → js/data.js → js/i18n.js → js/components.js → js/pages.js → js/app.js
```

- **`js/data.js`** (2200+ lines): All site content embedded in `window.DATA` (config, pages, news articles). This is the "database" — no backend or API calls.
- **`js/i18n.js`**: I18n class using language-suffixed fields (`title_zh`, `title_en`). Fallback chain: `_zh` → `_en` → bare field. Language set via `?lang=en` URL param.
- **`js/components.js`**: Template functions returning HTML strings, mounted on `window` (e.g., `renderNavbar()`, `renderFooter()`, `renderNewsCard()`).
- **`js/pages.js`**: Page renderers dispatched by `data-page` attribute on `<body>`. Contains filter/pagination state (`_activeTab`, `_currentPage`, `_activeMonth`).
- **`js/app.js`**: Entry point (~28 lines). Initializes i18n, renders navbar/footer/page content.

### Routing

Each page type has its own HTML file (`index.html`, `about.html`, `contact.html`, `post.html`, `news/index.html`, `news/reports.html`, `projects/index.html`). The `<body data-page="...">` attribute tells `pages.js` which renderer to call. URL params: `?p=5079` for posts, `?lang=en` for language.

### Styling

- `css/style.css`: All styles, using CSS custom properties defined in `:root` (e.g., `--primary-color: #0066cc`, `--accent-color: #ff6600`)
- `css/fonts.css`: Self-hosted Noto Sans TC (4 weights: Light/Regular/Medium/Bold)
- Responsive breakpoints: 480px, 768px, 992px
- Layouts use CSS Grid (news grid, gallery, partners) and Flexbox (navbar, cards)

### Content Data

- `js/data.js` → `window.DATA` with `config`, `pages`, and `news` properties
- `news_articles.json` and `research_reports.json` are external JSON data files
- Images organized under `images/` by type: `banners/`, `news/`, `gallery/`, `about/`, `partners/`, `icons/`

### Asset Path Resolution

`window.BASE` is set in each HTML file (empty string at root, `../` in subdirectories) to resolve relative paths for images and links across different directory depths.

## Testing (Playwright E2E)

Tests use Playwright against the live GitHub Pages site by default.

```bash
# Run all tests (3 browsers)
npx playwright test

# Run a single test file
npx playwright test tests/home.spec.js

# Interactive UI mode
npx playwright test --ui

# Test against local server
BASE_URL=http://localhost:8000 npx playwright test
```

Test files are in `tests/` — see `playwright.config.js` for browser and timeout config.

## Key Conventions

- All component/page functions are attached to `window` (global namespace pattern)
- Bilingual content uses `_zh`/`_en` suffixed field names throughout
- News articles are categorized by project type: India, ASEAN, TISEC, Other
- Projects page uses tabbed filtering with monthly archive sidebar and pagination
