// @ts-check
const { test, expect } = require('./base');

const pages = [
  { name: 'Home', path: './' },
  { name: 'About', path: './about.html' },
  { name: 'Contact', path: './contact.html' },
  { name: 'Post', path: './post.html?p=5079' },
  { name: 'News', path: './news/' },
  { name: 'Reports', path: './news/reports.html' },
  { name: 'Projects', path: './projects/' },
];

for (const p of pages) {
  test.describe(`${p.name} page (${p.path})`, () => {
    test('loads without JS errors', async ({ page }) => {
      const errors = [];
      page.on('pageerror', (err) => errors.push(err.message));
      await page.goto(p.path);
      expect(errors).toEqual([]);
    });

    test('renders navbar', async ({ page }) => {
      await page.goto(p.path);
      const navbar = page.locator('#navbar');
      await expect(navbar).toBeVisible();
      const navLinks = navbar.locator('.nav-item');
      await expect(navLinks.first()).toBeVisible();
    });

    test('renders footer', async ({ page }) => {
      await page.goto(p.path);
      const footer = page.locator('#footer');
      await expect(footer).toBeVisible();
    });
  });
}
