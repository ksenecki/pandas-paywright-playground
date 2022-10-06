import { MostWantedPage } from '@page-objects/MostWantedPage';
import { expect, test } from '@playwright/test';

test.describe('Most Wanted products', () => {
  let mostWantedPage: MostWantedPage;
  test.beforeEach(async ({ page }) => {
    mostWantedPage = new MostWantedPage(page);
    await mostWantedPage.loadMostWantedpage();
  });

  test('Assert URL', async ({ page }) => {
    expect(page).toHaveURL('/product-category/most-wanted/');
  });
});
