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

    // Render shared layout
    const navbar = document.getElementById('navbar');
    if (navbar) navbar.innerHTML = window.renderNavbar();

    const footer = document.getElementById('footer');
    if (footer) footer.innerHTML = window.renderFooter();

    // Render page content based on <body data-page="...">
    window.renderCurrentPage();
})();
