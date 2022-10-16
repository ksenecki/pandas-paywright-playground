import { expect, Locator, Page } from '@playwright/test';

export class LostPasswordPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly usernameInput: Locator;
  readonly resetPasswordButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('.page-title');
    this.usernameInput = page.locator('#user_login');
    this.resetPasswordButton = page.locator("[value='Reset password']");
    this.errorMessage = page.locator('.woocommerce-error > li');
  }

  async loadLostPasswordPage() {
    const pageTitle = await this.pageTitle;
    await this.page.goto('/my-account/lost-password/');
    expect(pageTitle).toContainText('Lost password');
  }
}
