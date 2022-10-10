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

  test('Assert Most Wanted URL', async ({ page }) => {
    expect(page).toHaveURL('/product-category/most-wanted/');
  });
});
