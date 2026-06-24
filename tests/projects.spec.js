// @ts-check
const { test, expect } = require('./base');

test.describe('Projects page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('./projects/');
  });

  test('project sub-nav tabs are visible', async ({ page }) => {
    const subNav = page.locator('.project-subnav, .project-tabs');
    await expect(subNav).toBeVisible();
  });

  test('default tab is India', async ({ page }) => {
    const activeTab = page.locator('.project-subnav-item.active, .project-tab.active');
    await expect(activeTab).toContainText(/印度|India/);
  });

  test('switching to ASEAN tab updates content', async ({ page }) => {
    const aseanTab = page.locator('.project-subnav-item, .project-tab').filter({ hasText: /東協|ASEAN/ });
    await aseanTab.click();
    await page.waitForTimeout(500);
    await expect(page).toHaveURL(/#asean/);
    const activeTab = page.locator('.project-subnav-item.active, .project-tab.active');
    await expect(activeTab).toContainText(/東協|ASEAN/);
  });

  test('switching to TISEC tab works', async ({ page }) => {
    const tisecTab = page.locator('.project-subnav-item, .project-tab').filter({ hasText: /TISEC/ });
    await tisecTab.click();
    await page.waitForTimeout(500);
    await expect(page).toHaveURL(/#tisec/);
  });

  test('switching to Others tab works', async ({ page }) => {
    const otherTab = page.locator('.project-subnav-item, .project-tab').filter({ hasText: /其他|Others/ });
    await otherTab.click();
    await page.waitForTimeout(500);
    await expect(page).toHaveURL(/#other/);
  });

  test('archive sidebar is visible', async ({ page }) => {
    const sidebar = page.locator('.project-sidebar');
    await expect(sidebar).toBeVisible();
  });

  test('clicking archive month filters posts', async ({ page }) => {
    const archiveLinks = page.locator('.archive-link');
    const count = await archiveLinks.count();
    if (count <= 1) {
      test.skip();
      return;
    }
    const monthLink = archiveLinks.nth(1);
    await monthLink.click();
    await page.waitForTimeout(500);
    await expect(monthLink).toHaveClass(/active/);
  });

  test('post list has items', async ({ page }) => {
    const posts = page.locator('.project-post-item');
    expect(await posts.count()).toBeGreaterThan(0);
  });
});
