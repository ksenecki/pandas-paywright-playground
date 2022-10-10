import { HomePage } from '@page-objects/HomePage';
import { expect, test } from '@playwright/test';
import { allure } from 'allure-playwright';

test.describe('Visual tests for Categories', () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }, testInfo) => {
    allure.suite('Categories');
    homePage = new HomePage(page);
    await homePage.loadHomepage();
  });

  test('Categories hover menu visual test', async ({ page }) => {
    await homePage.categoriesNavButton.hover();
    expect(await page.screenshot()).toMatchSnapshot(
      'categories-hover-menu.png',
      { threshold: 0.2 }
    );
  });

  test('Categories All visual test', async ({ page }) => {
    await page.goto('/shop/');
    expect(await page.screenshot()).toMatchSnapshot('categories-all.png', {
      threshold: 0.2,
    });
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
      await page.goto(`/product-category/${category}/`);
      expect(await page.screenshot()).toMatchSnapshot(
        `categories-${category}.png`,
        {
          threshold: 0.2,
        }
      );
    });
  }
});
