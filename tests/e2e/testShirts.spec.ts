import { ShirtsPage } from '@page-objects/ShirtsPage';
import { expect, test } from '@playwright/test';
import { allure } from 'allure-playwright';

test.describe.only('Shirts products', () => {
  let shirtsPage: ShirtsPage;
  test.beforeEach(async ({ page }, testInfo) => {
    allure.suite('E2E: Shirts');
    shirtsPage = new ShirtsPage(page);
    await shirtsPage.loadShirtsPage();
  });

  test('Assert Shirts URL', async ({ page }) => {
    expect(page).toHaveURL('/product-category/shirts/');
  });

  test('Test default sorting', async ({}) => {
    const sorting = await shirtsPage.sortingSelector.selectOption({
      label: 'Default sorting',
    });
    const product = await shirtsPage.productsList.first().innerText();
    expect(sorting).toContain('menu_order');
    expect(product).toContain('Alani T-Shirt');
  });

  test('Test popularity sorting', async ({}) => {
    const sorting = await shirtsPage.sortingSelector.selectOption({
      label: 'Sort by popularity',
    });
    const product = await shirtsPage.productsList.first().innerText();
    expect(sorting).toContain('popularity');
    expect(product).toContain('Alani T-Shirt');
  });

  test('Test average rating sorting', async ({}) => {
    const sorting = await shirtsPage.sortingSelector.selectOption({
      label: 'Sort by average rating',
    });
    const product = await shirtsPage.productsList.first().innerText();
    expect(sorting).toContain('rating');
    expect(product).toContain('Manago Shirt');
  });

  test('Test newness sorting', async ({}) => {
    const sorting = await shirtsPage.sortingSelector.selectOption({
      label: 'Sort by newness',
    });
    const product = await shirtsPage.productsList.first().innerText();
    expect(sorting).toContain('date');
    expect(product).toContain('Marina Style');
  });

  test.skip('Test price low to high sorting', async ({}) => {
    const sorting = await shirtsPage.sortingSelector.selectOption({
      label: 'Sort by price: low to high',
    });
    const product = await shirtsPage.productsList.first().innerText();
    expect(sorting).toContain('price');
    expect(product).toContain('Visual M. T-Shirt');
  });

  test.skip('Test price high to low sorting', async ({}) => {
    const sorting = await shirtsPage.sortingSelector.selectOption({
      label: 'Sort by price: high to low',
    });
    const product = await shirtsPage.productsList.first().innerText();
    expect(sorting).toContain('price-desc');
    expect(product).toContain('Marina Style');
  });

  test('Test sale tag', async ({}) => {
    await shirtsPage.sortingSelector.selectOption({ label: 'Default sorting' });
    const product = await shirtsPage.productsList.first().innerText();
    console.log(product);
    expect(product).toContain('Sale!');
  });
});
