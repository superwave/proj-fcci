// @ts-check
const { test, expect } = require('./base');

test.describe('News list page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('./news/');
  });

  test('page title is visible', async ({ page }) => {
    const title = page.locator('.page-title');
    await expect(title).toContainText(/新聞快訊|News Articles/);
  });

  test('news list has article items', async ({ page }) => {
    const list = page.locator('#news-list-container');
    await expect(list).toBeVisible();
    const items = list.locator('.news-list-item, .project-post-item, a');
    expect(await items.count()).toBeGreaterThan(0);
  });

  test('pagination exists when enough articles', async ({ page }) => {
    const pagination = page.locator('.pagination');
    const count = await pagination.count();
    if (count > 0) {
      await expect(pagination).toBeVisible();
      const pageLinks = pagination.locator('a');
      expect(await pageLinks.count()).toBeGreaterThan(0);
    }
  });

  test('clicking next page changes content', async ({ page }) => {
    const pagination = page.locator('.pagination');
    const count = await pagination.count();
    if (count === 0) {
      test.skip();
      return;
    }
    const firstItemText = await page.locator('#news-list-container a').first().textContent();
    const nextBtn = pagination.locator('a').filter({ hasText: '»' });
    if (await nextBtn.count() > 0) {
      await nextBtn.click();
      await page.waitForTimeout(500);
      const newFirstItemText = await page.locator('#news-list-container a').first().textContent();
      expect(newFirstItemText).not.toEqual(firstItemText);
    }
  });
});

test.describe('Reports page', () => {
  test('reports page loads with title', async ({ page }) => {
    await page.goto('./news/reports.html');
    const title = page.locator('.page-title');
    await expect(title).toContainText(/調研報告|Research Papers/);
  });

  test('reports list has items', async ({ page }) => {
    await page.goto('./news/reports.html');
    const list = page.locator('#news-list-container');
    await expect(list).toBeVisible();
  });
});
