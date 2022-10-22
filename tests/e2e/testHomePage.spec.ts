import { HomePage } from '@page-objects/HomePage';
import { expect, Page, test } from '@playwright/test';
import { getRandomNumber, getRandomString } from '@utils/data-helpers';
import { allure } from 'allure-playwright';

test.describe('Open Homepage', () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }, testInfo) => {
    allure.suite('E2E: HomePage');
    homePage = new HomePage(page);
    await homePage.loadHomePage();
  });

  test('Go back to the main page', async ({ page }) => {
    await homePage.shopNavButton.click();
    expect(page).toHaveURL('/');
  });

  test('Go to toe Most Wanted', async ({ page }) => {
    await homePage.wantedNavButton.click();
    expect(page).toHaveURL('/product-category/most-wanted/');
  });

  test('Test Categories nav button', async ({ page }) => {
    await homePage.categoriesNavButton.hover();
    expect(page).toHaveURL('/');
  });

  test('Go to All category', async ({ page }) => {
    await homePage.categoriesNavButton.hover();
    const chosenCategory = await page.locator("a[title='All']");
    await chosenCategory.click();
    expect(page).toHaveURL('/shop/');
  });

  const categories = [
    'Shirts',
    'Featured',
    'Trends',
    'Scarfs',
    'Shoes',
    'Tops',
    'Blouse',
    'Jeans',
    'Dresses',
  ];
  for (const category of categories) {
    test(`Go to ${category} category`, async ({ page }) => {
      await homePage.categoriesNavButton.hover();
      const chosenCategory = await page.locator(`a[title='${category}']`);
      await chosenCategory.click();
      expect(page).toHaveURL(`/product-category/${category.toLowerCase()}/`);
    });
  }

  test.skip('Go to About Us page', async ({ page }) => {
    //Shop feature does not work properly
    await homePage.aboutUsNavButton.click();
    expect(page).toHaveURL('/about-us/');
  });

  test.skip('Go to Contact page', async ({ page }) => {
    //Shop feature does not work properly
    await homePage.contactNavButton.click();
    expect(page).toHaveURL('/contact/');
  });

  test.skip('Go to Blog page', async ({ page }) => {
    //Shop feature does not work properly
    await homePage.blogNavButton.click();
    expect(page).toHaveURL('/blog/');
  });

  test.skip('Go to My Account page', async ({ page }) => {
    //Shop feature does not work properly
    await homePage.blogNavButton.click();
    expect(page).toHaveURL('/my-account/');
  });
});
