// @ts-check
const { test, expect } = require('./base');

test.describe('Single post page', () => {
  test('loads article with ?p= parameter', async ({ page }) => {
    await page.goto('./post.html?p=5079');
    const title = page.locator('.post-title');
    await expect(title).toBeVisible();
    const titleText = await title.textContent();
    expect(titleText.length).toBeGreaterThan(0);
  });

  test('article has date', async ({ page }) => {
    await page.goto('./post.html?p=5079');
    const date = page.locator('.post-date');
    await expect(date).toBeVisible();
    await expect(date).toContainText(/\d{4}/);
  });

  test('article content area exists', async ({ page }) => {
    await page.goto('./post.html?p=5079');
    const postContent = page.locator('.post-content');
    await expect(postContent).toBeVisible();
  });

  test('back to news link exists', async ({ page }) => {
    await page.goto('./post.html?p=5079');
    const backLink = page.locator('.btn-back');
    await expect(backLink).toBeVisible();
    await expect(backLink).toContainText(/返回新聞列表|Back to News/);
  });

  test('invalid post ID shows 404', async ({ page }) => {
    await page.goto('./post.html?p=99999');
    const errorPage = page.locator('.error-page');
    await expect(errorPage).toBeVisible();
  });

  test('missing post ID shows 404', async ({ page }) => {
    await page.goto('./post.html');
    const errorPage = page.locator('.error-page');
    await expect(errorPage).toBeVisible();
  });

  test('English version loads with lang param', async ({ page }) => {
    await page.goto('./post.html?p=5079&lang=en');
    const backLink = page.locator('.btn-back');
    await expect(backLink).toContainText(/Back to News/);
  });
});
