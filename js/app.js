// Main Application Entry Point

(async function() {
    'use strict';

    // Initialize i18n
    const i18nReady = await window.i18n.init();

    if (!i18nReady) {
        document.getElementById('app-content').innerHTML = `
            <div class="error-page">
                <h1>Error</h1>
                <p>Failed to load application data. Please refresh the page.</p>
            </div>
        `;
        return;
    }

    // Skip-to-content link (first focusable element) — WCAG 2.4.1
    const lang = window.i18n.getLang();
    const main = document.getElementById('app-content');
    if (main && !document.querySelector('.skip-link')) {
        main.setAttribute('tabindex', '-1');
        const skip = document.createElement('a');
        skip.className = 'skip-link';
        skip.href = '#app-content';
        skip.textContent = lang === 'en' ? 'Skip to main content' : '跳至主要內容';
        skip.addEventListener('click', (e) => {
            e.preventDefault();
            main.focus();
            main.scrollIntoView();
        });
        document.body.insertBefore(skip, document.body.firstChild);
    }

    // Render shared layout
    const navbar = document.getElementById('navbar');
    if (navbar) navbar.innerHTML = window.renderNavbar();

    const footer = document.getElementById('footer');
    if (footer) footer.innerHTML = window.renderFooter();

    // Render page content based on <body data-page="...">
    window.renderCurrentPage();
})();
