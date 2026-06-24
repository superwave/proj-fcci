// @ts-check
const { test, expect } = require('./base');

test.describe('Contact page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('./contact.html');
  });

  test('page title is visible', async ({ page }) => {
    const title = page.locator('.page-title');
    await expect(title).toContainText(/聯絡我們|Contact Us/);
  });

  test('contact info cards exist', async ({ page }) => {
    const offices = page.locator('.contact-office');
    expect(await offices.count()).toBeGreaterThanOrEqual(2);
  });

  test('contact form exists with required fields', async ({ page }) => {
    const form = page.locator('#contactForm');
    await expect(form).toBeVisible();

    await expect(page.locator('#name')).toBeVisible();
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#subject')).toBeVisible();
    await expect(page.locator('#message')).toBeVisible();
  });

  test('form fields have required attribute', async ({ page }) => {
    expect(await page.locator('#name').getAttribute('required')).not.toBeNull();
    expect(await page.locator('#email').getAttribute('required')).not.toBeNull();
    expect(await page.locator('#subject').getAttribute('required')).not.toBeNull();
    expect(await page.locator('#message').getAttribute('required')).not.toBeNull();
  });

  test('email field validates email format', async ({ page }) => {
    const emailInput = page.locator('#email');
    expect(await emailInput.getAttribute('type')).toBe('email');
  });

  test('empty form submission is blocked by HTML5 validation', async ({ page }) => {
    const submitBtn = page.locator('#contactForm button[type="submit"]');
    await submitBtn.click();
    const nameInput = page.locator('#name');
    const isInvalid = await nameInput.evaluate((el) => !el.checkValidity());
    expect(isInvalid).toBe(true);
  });
});
