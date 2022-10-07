import { HomePage } from '@page-objects/HomePage';
import { expect, test } from '@playwright/test';

test.describe('Visual tests for Categories', () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
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

  test('Categories Shirts visual test', async ({ page }) => {
    await page.goto('/product-category/shirts/');
    expect(await page.screenshot()).toMatchSnapshot('categories-shirts.png', {
      threshold: 0.2,
    });
  });

  test('Categories Featured visual test', async ({ page }) => {
    await page.goto('/product-category/featured/');
    expect(await page.screenshot()).toMatchSnapshot('categories-featured.png', {
      threshold: 0.2,
    });
  });

  test('Categories Trends visual test', async ({ page }) => {
    await page.goto('/product-category/trends/');
    expect(await page.screenshot()).toMatchSnapshot('categories-trends.png', {
      threshold: 0.2,
    });
  });

  test('Categories Scarfs visual test', async ({ page }) => {
    await page.goto('/product-category/scarfs/');
    expect(await page.screenshot()).toMatchSnapshot('categories-scarfs.png', {
      threshold: 0.2,
    });
  });

  test('Categories Shoes visual test', async ({ page }) => {
    await page.goto('/product-category/shoes/');
    expect(await page.screenshot()).toMatchSnapshot('categories-shoes.png', {
      threshold: 0.2,
    });
  });

  test('Categories Tops visual test', async ({ page }) => {
    await page.goto('/product-category/tops/');
    expect(await page.screenshot()).toMatchSnapshot('categories-tops.png', {
      threshold: 0.2,
    });
  });

  test('Categories Blouse visual test', async ({ page }) => {
    await page.goto('/product-category/blouse/');
    expect(await page.screenshot()).toMatchSnapshot('categories-blouse.png', {
      threshold: 0.2,
    });
  });

  test('Categories Jeans visual test', async ({ page }) => {
    await page.goto('/product-category/jeans/');
    expect(await page.screenshot()).toMatchSnapshot('categories-jeans.png', {
      threshold: 0.2,
    });
  });

  test('Categories Dresses visual test', async ({ page }) => {
    await page.goto('/product-category/dresses/');
    expect(await page.screenshot()).toMatchSnapshot('categories-dresses.png', {
      threshold: 0.2,
    });
  });
});
