// @ts-check
const { test, expect } = require('./base');

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 800 },
];

for (const vp of viewports) {
  test.describe(`${vp.name} (${vp.width}px)`, () => {
    test.use({ viewport: { width: vp.width, height: vp.height } });

    test('home page loads correctly', async ({ page }) => {
      await page.goto('./');
      const content = page.locator('#app-content');
      await expect(content).toBeVisible();
    });

    if (vp.width <= 768) {
      test('hamburger menu is visible', async ({ page }) => {
        await page.goto('./');
        const toggler = page.locator('.navbar-toggler');
        await expect(toggler).toBeVisible();
      });

      test('hamburger menu opens on click', async ({ page }) => {
        await page.goto('./');
        const toggler = page.locator('.navbar-toggler');
        await toggler.click();
        const menu = page.locator('#navbarMenu');
        await expect(menu).toHaveClass(/active|open|show/);
      });
    }

    if (vp.width >= 992) {
      test('full navbar is visible', async ({ page }) => {
        await page.goto('./');
        const navMenu = page.locator('.nav-menu');
        await expect(navMenu).toBeVisible();
        const toggler = page.locator('.navbar-toggler');
        await expect(toggler).toBeHidden();
      });
    }
  });
}
