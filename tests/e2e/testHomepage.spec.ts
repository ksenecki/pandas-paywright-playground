import { HomePage } from '@page-objects/HomePage';
import { expect, Page, test } from '@playwright/test';
import { getRandomNumber, getRandomString } from '@utils/data-helpers';
import { allure } from 'allure-playwright';

test.describe('Open Homepage', () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }, testInfo) => {
    allure.suite('E2E: HomePage');
    homePage = new HomePage(page);
    await homePage.loadHomepage();
  });

  test('Shop nav button', async ({ page }) => {
    await homePage.shopNavButton.click();
    expect(page).toHaveURL('/');
  });

  test('Most Wanted nav button', async ({ page }) => {
    await homePage.wantedNavButton.click();
    expect(page).toHaveURL('/product-category/most-wanted/');
  });

  test('Categories nav button', async ({ page }) => {
    await homePage.categoriesNavButton.hover();
    expect(page).toHaveURL('/');
  });

  test('Categories list: All', async ({ page }) => {
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
    test(`Categories list: ${category}`, async ({ page }) => {
      await homePage.categoriesNavButton.hover();
      const chosenCategory = await page.locator(`a[title='${category}']`);
      await chosenCategory.click();
      expect(page).toHaveURL(`/product-category/${category.toLowerCase()}/`);
    });
  }

  test('About Us nav button', async ({ page }) => {
    await homePage.aboutUsNavButton.click();
    expect(page).toHaveURL('/about-us/');
  });

  test('Contact nav button', async ({ page }) => {
    await homePage.contactNavButton.click();
    expect(page).toHaveURL('/contact/');
  });

  test('Blog Us nav button', async ({ page }) => {
    await homePage.blogNavButton.click();
    expect(page).toHaveURL('/blog/');
  });
});
