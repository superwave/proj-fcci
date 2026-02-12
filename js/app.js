// Main Application Entry Point

(async function() {
    'use strict';

    // Initialize i18n first
    const i18nReady = await window.i18n.init();

    if (!i18nReady) {
        console.error('Failed to initialize i18n');
        document.getElementById('app-content').innerHTML = `
            <div class="error-page">
                <h1>Error</h1>
                <p>Failed to load application data. Please refresh the page.</p>
            </div>
        `;
        return;
    }

    // Initialize router
    window.router.init();

    // Render navbar
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.innerHTML = window.renderNavbar();
    }

    // Render footer
    const footer = document.getElementById('footer');
    if (footer) {
        footer.innerHTML = window.renderFooter();
    }

    // Handle initial route
    await window.router.handleRoute();

    console.log('FCCI App initialized successfully');
})();
