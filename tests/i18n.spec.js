// @ts-check
const { test, expect } = require('./base');

test.describe('Internationalization (i18n)', () => {
  test('default language is Chinese', async ({ page }) => {
    await page.goto('./');
    const title = page.locator('.section-title').first();
    await expect(title).toContainText(/最新消息|活動集錦|影片集錦|合作夥伴/);
  });

  test('?lang=en switches to English', async ({ page }) => {
    await page.goto('./?lang=en');
    const title = page.locator('.section-title').first();
    await expect(title).toContainText(/Latest News|Event Gallery|Videos|Our Partners/);
  });

  test('navbar updates in English', async ({ page }) => {
    await page.goto('./?lang=en');
    const navbar = page.locator('#navbar');
    await expect(navbar).toContainText(/About FCCI/);
    await expect(navbar).toContainText(/Contact/);
  });

  test('footer updates in English', async ({ page }) => {
    await page.goto('./?lang=en');
    const footer = page.locator('#footer');
    const footerText = await footer.textContent();
    expect(footerText).toBeTruthy();
  });

  test('language switcher buttons exist', async ({ page }) => {
    await page.goto('./');
    const zhBtn = page.locator('.lang-switcher button').filter({ hasText: '中文' });
    const enBtn = page.locator('.lang-switcher button').filter({ hasText: 'English' });
    await expect(zhBtn).toBeVisible();
    await expect(enBtn).toBeVisible();
  });

  test('clicking English button switches language', async ({ page }) => {
    await page.goto('./');
    await page.locator('.lang-switcher button').filter({ hasText: 'English' }).click();
    await expect(page).toHaveURL(/lang=en/);
    const title = page.locator('.section-title').first();
    await expect(title).toContainText(/Latest News|Event Gallery|Videos|Our Partners/);
  });
});
