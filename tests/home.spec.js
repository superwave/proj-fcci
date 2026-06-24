// @ts-check
const { test, expect } = require('./base');

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('./');
  });

  test('banner carousel exists with images', async ({ page }) => {
    const carousel = page.locator('.banner-carousel, .carousel');
    await expect(carousel).toBeVisible();
    const images = carousel.locator('img');
    expect(await images.count()).toBeGreaterThan(0);
  });

  test('latest news section has cards', async ({ page }) => {
    const newsSection = page.locator('.latest-news');
    await expect(newsSection).toBeVisible();
    const cards = newsSection.locator('.news-card');
    expect(await cards.count()).toBeGreaterThan(0);
  });

  test('partners section exists', async ({ page }) => {
    const partners = page.locator('section.partners-section');
    await expect(partners).toBeVisible();
    const logos = partners.locator('img');
    expect(await logos.count()).toBeGreaterThan(0);
  });

  test('gallery section exists', async ({ page }) => {
    const gallery = page.locator('.gallery-section');
    await expect(gallery).toBeVisible();
    const items = gallery.locator('.gallery-item');
    expect(await items.count()).toBeGreaterThan(0);
  });
});
