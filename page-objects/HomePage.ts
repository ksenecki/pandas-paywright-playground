import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly siteTitle: Locator;
  readonly shopNavButton: Locator;
  readonly wantedNavButton: Locator;
  readonly categoriesNavButton: Locator;
  readonly categoriesDropdownMenu: Locator;
  readonly aboutUsNavButton: Locator;
  readonly contactNavButton: Locator;
  readonly blogNavButton: Locator;
  readonly searchNavInput: Locator;
  readonly newsletterName: Locator;
  readonly newsletterEmail: Locator;
  readonly newsletterSubmitButton: Locator;
  readonly mainSlider: Locator;

  constructor(page: Page) {
    this.page = page;
    this.siteTitle = page.locator("a[class='site-title']");
    this.shopNavButton = page.locator("a[title='Shop']");
    this.wantedNavButton = page.locator("a[title='Most Wanted']");
    this.categoriesNavButton = page.locator("a[title='Catergries']");
    this.categoriesDropdownMenu = page.locator("[class=' dropdown-menu']");
    this.aboutUsNavButton = page.locator("a[title='About Us']");
    this.contactNavButton = page.locator("a[title='Contact']");
    this.blogNavButton = page.locator("a[title='Blog']");
    this.searchNavInput = page.locator('#search-field-top-bar');
    this.newsletterName = page.locator('#es_txt_name');
    this.newsletterEmail = page.locator('#es_txt_email');
    this.newsletterSubmitButton = page.locator('#es_txt_button');
    this.mainSlider = page.locator('.main-slider-bar');
  }

  async loadHomepage() {
    const pageTitle = await this.siteTitle;
    await this.page.goto('/');
    await expect(pageTitle).toContainText('Generic Shop');
  }
}
