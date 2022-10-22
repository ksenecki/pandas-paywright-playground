import { HomePage } from '@page-objects/HomePage';
import { expect, test } from '@playwright/test';
import { allure } from 'allure-playwright';

test.describe('Test footer', () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }, testInfo) => {
    allure.suite('E2E: Footer');
    homePage = new HomePage(page);
    await homePage.loadHomePage();
  });

  test('Sign for newsletter', async ({ page }) => {
    await homePage.newsletterName.fill('test');
    await homePage.newsletterEmail.fill('test@email.com');
    await homePage.newsletterSubmitButton.click();
    await expect(homePage.newsletterEmail).toBeHidden();
  });

  test('Footer tags content', async ({ page }) => {
    const tags = await homePage.footerTags.allTextContents();
    const expectedTags = [
      'Autumn',
      'dress',
      'fashion',
      'jackets',
      'stockings',
      'trends',
    ];
    await expect(tags).toStrictEqual(expectedTags);
  });

  const tags = ['Autumn', 'dress', 'fashion', 'jackets', 'stockings', 'trends'];
  tags.map((tag) => {
    test(`Footer tags links: ${tag}`, async ({ page }) => {
      const selectedTag = await page.locator(`.tagcloud >> text=${tag}`);
      await selectedTag.click();
      expect(page).toHaveURL(`/tag/${tag.toLowerCase()}/`);
    });
  });
});
