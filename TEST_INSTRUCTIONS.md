# Testing the FCCI Website

## Quick Start

Your local development server is already running at:
**http://localhost:8000**

## Test Pages

### Main Navigation:
- **Homepage:** http://localhost:8000/
- **About FCCI:** http://localhost:8000/?page=about
- **India:** http://localhost:8000/?page=india
- **ASEAN:** http://localhost:8000/?page=asean
- **TISEC:** http://localhost:8000/?page=tisec
- **Other Projects:** http://localhost:8000/?page=other
- **News:** http://localhost:8000/?page=news
- **Reports:** http://localhost:8000/?page=reports
- **Contact:** http://localhost:8000/?page=contact

### Language Switching:
Add `&lang=en` to any URL for English version:
- http://localhost:8000/?page=about&lang=en

### Individual News Articles:
- http://localhost:8000/?p=5079
- http://localhost:8000/?p=4994
- http://localhost:8000/?p=4940
- http://localhost:8000/?p=4933

## What to Test:

1. **Navigation**
   - Click through all menu items
   - Test dropdown menus (Projects, Industry Watch)
   - Verify active page highlighting

2. **Language Switching**
   - Click 中文/English buttons in navbar
   - Verify content changes
   - Check URL updates

3. **Homepage**
   - Banner carousel auto-play
   - Manual carousel controls (prev/next)
   - Carousel indicators
   - News cards layout
   - Gallery grid
   - Partners section

4. **Responsive Design**
   - Resize browser window
   - Test on mobile size (< 768px)
   - Check hamburger menu on mobile
   - Verify image scaling

5. **News System**
   - Browse news listing page
   - Click news card to view detail
   - Test back button
   - Verify images load

6. **Contact Form**
   - Fill out form fields
   - Test validation (empty fields)
   - Submit form (shows alert)

7. **Performance**
   - Page load speed
   - Smooth transitions
   - Image loading

## Browser Testing:

Test in multiple browsers:
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers

## Known Issues:

- Partner logos are placeholder files (need actual logos)
- YouTube video section needs playlist ID
- Contact form only validates (no backend)

## Stop the Server:

When done testing, stop the server:
```bash
pkill -f "python3 -m http.server 8000"
```

Or restart it:
```bash
cd /Users/aotterapp/workfiles/proj_fcci
python3 -m http.server 8000
```
