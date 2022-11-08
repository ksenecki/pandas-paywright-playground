import { expect, Locator, Page } from '@playwright/test';

export class ShirtsPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly sortingSelector: Locator;
  readonly productsList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('.page-title');
    this.sortingSelector = page.locator("select[class='orderby']");
    this.productsList = page.locator("li[class*='product_cat-shirts']");
  }

  async loadShirtsPage() {
    await this.page.goto('/product-category/shirts/');
    expect(this.pageTitle).toContainText('Shirts');
  }
}
