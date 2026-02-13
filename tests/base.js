// Shared test fixture that waits for JS rendering to complete
const base = require('@playwright/test');

// Extend the base test with a page that waits for rendering
exports.test = base.test.extend({
  page: async ({ page }, use) => {
    const originalGoto = page.goto.bind(page);
    page.goto = async function (url, options) {
      const response = await originalGoto(url, options);
      // Wait for the async app.js to finish rendering
      // All pages render a .nav-menu inside #navbar
      await page.waitForSelector('#navbar .navbar-container', { timeout: 15000 }).catch(() => {});
      return response;
    };
    await use(page);
  },
});

exports.expect = base.expect;
