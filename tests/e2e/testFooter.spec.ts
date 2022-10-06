import { HomePage } from '@page-objects/HomePage';
import { expect, test } from '@playwright/test';

test.describe('Test footer', () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.loadHomepage();
  });

  test('Sign for newsletter', async ({ page }) => {
    await homePage.newsletterName.fill('test');
    await homePage.newsletterEmail.fill('test@email.com');
    await homePage.newsletterSubmitButton.click();
    await expect(homePage.newsletterEmail).toBeHidden();
  });
});
