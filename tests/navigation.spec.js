// @ts-check
const { test, expect } = require('./base');

test.describe('Navigation', () => {
  test('navbar brand links to home', async ({ page }) => {
    await page.goto('./about.html');
    await page.locator('.brand-logo').click();
    await expect(page).toHaveURL(/index\.html|\/$/);
  });

  test('About link navigates correctly', async ({ page }) => {
    await page.goto('./');
    await page.locator('.nav-item a.nav-link').filter({ hasText: /關於FCCI|About FCCI/ }).click();
    await expect(page).toHaveURL(/about\.html/);
  });

  test('Contact link navigates correctly', async ({ page }) => {
    await page.goto('./');
    await page.locator('.nav-item a.nav-link').filter({ hasText: /聯絡我們|Contact/ }).click();
    await expect(page).toHaveURL(/contact\.html/);
  });

  test('dropdown menu opens on hover/click', async ({ page }) => {
    await page.goto('./');
    const dropdown = page.locator('.nav-item.dropdown').first();
    await dropdown.hover();
    const menu = dropdown.locator('.dropdown-menu');
    await expect(menu).toBeVisible();
  });

  test('dropdown submenu links work', async ({ page }) => {
    await page.goto('./');
    const dropdown = page.locator('.nav-item.dropdown').first();
    await dropdown.hover();
    const firstLink = dropdown.locator('.dropdown-menu a').first();
    await firstLink.click();
    // Should navigate to projects or news subpage
    const url = page.url();
    expect(url).not.toMatch(/index\.html$/);
  });
});
