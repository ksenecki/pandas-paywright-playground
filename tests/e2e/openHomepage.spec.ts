import { HomePage } from '@page-objects/HomePage';
import { expect, test } from '@playwright/test';

test.describe('Open Homepage', () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.loadHomepage();
  });

  test('Load Homepage', async ({ page }) => {
    const pageTitle = await page.locator('h1');
    await expect(pageTitle).toContainText('Generic Shop');
  });

  test('Shop nav button', async ({ page }) => {
    await homePage.shopNavButton.click();
    expect(page).toHaveURL('/');
  });
});
