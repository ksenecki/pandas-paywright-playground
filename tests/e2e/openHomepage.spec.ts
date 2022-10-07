import { HomePage } from '@page-objects/HomePage';
import { expect, Page, test } from '@playwright/test';

test.describe('Open Homepage', () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
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

  test('Categories list: Shirts', async ({ page }) => {
    await homePage.categoriesNavButton.hover();
    const chosenCategory = await page.locator("a[title='Shirts']");
    await chosenCategory.click();
    expect(page).toHaveURL('/product-category/shirts/');
  });

  test('Categories list: Featured', async ({ page }) => {
    await homePage.categoriesNavButton.hover();
    const chosenCategory = await page.locator("a[title='Featured']");
    await chosenCategory.click();
    expect(page).toHaveURL('/product-category/featured/');
  });

  test('Categories list: Trends', async ({ page }) => {
    await homePage.categoriesNavButton.hover();
    const chosenCategory = await page.locator("a[title='Trends']");
    await chosenCategory.click();
    expect(page).toHaveURL('/product-category/trends/');
  });

  test('Categories list: Scarfs', async ({ page }) => {
    await homePage.categoriesNavButton.hover();
    const chosenCategory = await page.locator("a[title='Scarfs']");
    await chosenCategory.click();
    expect(page).toHaveURL('/product-category/scarfs/');
  });

  test('Categories list: Shoes', async ({ page }) => {
    await homePage.categoriesNavButton.hover();
    const chosenCategory = await page.locator("a[title='Shoes']");
    await chosenCategory.click();
    expect(page).toHaveURL('/product-category/shoes/');
  });

  test('Categories list: Tops', async ({ page }) => {
    await homePage.categoriesNavButton.hover();
    const chosenCategory = await page.locator("a[title='Tops']");
    await chosenCategory.click();
    expect(page).toHaveURL('/product-category/tops/');
  });

  test('Categories list: Blouse', async ({ page }) => {
    await homePage.categoriesNavButton.hover();
    const chosenCategory = await page.locator("a[title='Blouse']");
    await chosenCategory.click();
    expect(page).toHaveURL('/product-category/blouse/');
  });

  test('Categories list: Jeans', async ({ page }) => {
    await homePage.categoriesNavButton.hover();
    const chosenCategory = await page.locator("a[title='Jeans']");
    await chosenCategory.click();
    expect(page).toHaveURL('/product-category/jeans/');
  });

  test('Categories list: Dresses', async ({ page }) => {
    await homePage.categoriesNavButton.hover();
    const chosenCategory = await page.locator("a[title='Dresses']");
    await chosenCategory.click();
    expect(page).toHaveURL('/product-category/dresses/');
  });

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
