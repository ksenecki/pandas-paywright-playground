import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly siteTitle: Locator;
  readonly shopNavButton: Locator;
  readonly wantedNavButton: Locator;
  readonly categoriesNavButton: Locator;
  readonly aboutUsNavButton: Locator;
  readonly contactNavButton: Locator;
  readonly blogNavButton: Locator;
  readonly newsletterName: Locator;
  readonly newsletterEmail: Locator;
  readonly newsletterSubmitButton: Locator;
  readonly mainSlider: Locator;

  constructor(page: Page) {
    this.page = page;
    this.siteTitle = page.locator("a[class='site-title']");
    this.shopNavButton = page.locator("a[title='Shop']");
    this.wantedNavButton = page.locator("a[title='Most Wanted']");
    this.categoriesNavButton = page.locator("a[title='Categories']");
    this.aboutUsNavButton = page.locator("a[title='About Us']");
    this.contactNavButton = page.locator("a[title='Contact']");
    this.blogNavButton = page.locator("a[title='Blog']");
    this.newsletterName = page.locator('#es_txt_name');
    this.newsletterEmail = page.locator('#es_txt_email');
    this.newsletterSubmitButton = page.locator('#es_txt_button');
    this.mainSlider = page.locator('.main-slider-bar');
  }

  async loadHomepage() {
    await this.page.goto('/');
    //todo: assert title
  }
}
