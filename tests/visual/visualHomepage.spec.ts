import { HomePage } from '@page-objects/HomePage';
import { expect, test } from '@playwright/test';

test.describe('Visual tests for Homepage', () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.loadHomepage();
  });

  test('Homepage snapshot', async ({ page }) => {
    const mainSlider = await homePage.mainSlider;
    expect(await page.screenshot({ mask: [mainSlider] })).toMatchSnapshot(
      'homepage.png',
      { threshold: 0.2 }
    );
  });
});
