import { MostWantedPage } from '@page-objects/MostWantedPage';
import { expect, test } from '@playwright/test';
import { allure } from 'allure-playwright';

test.describe('Most Wanted products', () => {
  let mostWantedPage: MostWantedPage;
  test.beforeEach(async ({ page }, testInfo) => {
    allure.suite('E2E: Most Wanted');
    mostWantedPage = new MostWantedPage(page);
    await mostWantedPage.loadMostWantedpage();
  });

  test('Test Most Wanted URL', async ({ page }) => {
    expect(page).toHaveURL('/product-category/most-wanted/');
  });

  const sortingLabels = [
    'Default sorting',
    'Sort by popularity',
    'Sort by average rating',
    'Sort by newness',
  ];

  const sortingVerify = ['menu_order', 'popularity', 'rating', 'date'];

  const productVerify = [
    'FITT Belts',
    'Magnolia Dress',
    'Rocadi Jeans',
    'FITT Belts',
  ];

  for (let i = 0; i < sortingLabels.length; i++) {
    test(`Test ${sortingLabels[i].toLowerCase()}`, async ({}) => {
      const sorting = await mostWantedPage.sortingSelector.selectOption({
        label: `${sortingLabels[i]}`,
      });
      const product = await mostWantedPage.productsList.nth(0);
      expect(sorting).toContain(`${sortingVerify[i]}`);
      await expect(product.locator('h2')).toHaveText(`${productVerify[i]}`);
    });
  }

  test('Test sale tag', async ({}) => {
    await mostWantedPage.sortingSelector.selectOption({
      label: 'Sort by average rating',
    });
    const product = await mostWantedPage.productsList.nth(0).innerText();
    expect(product).toContain('Sale!');
  });
});
