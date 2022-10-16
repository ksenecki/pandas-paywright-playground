import { expect, Locator, Page } from '@playwright/test';

export class MyAccountPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly registerEmailInput: Locator;
  readonly registerPasswordInput: Locator;
  readonly registerSubmitButton: Locator;
  readonly loginUsernameInput: Locator;
  readonly loginPasswordInput: Locator;
  readonly loginSubmitButton: Locator;
  readonly errorMessage: Locator;
  readonly lostPassword: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('.page-title');
    this.registerEmailInput = page.locator('#reg_email');
    this.registerPasswordInput = page.locator('#reg_password');
    this.registerSubmitButton = page.locator(
      '.register > p:nth-of-type(3) > .button'
    );
    this.loginUsernameInput = page.locator('#username');
    this.loginPasswordInput = page.locator('#password');
    this.loginSubmitButton = page.locator(
      '.login > p:nth-of-type(3) > .button'
    );
    this.errorMessage = page.locator('.woocommerce-error > li');
    this.lostPassword = page.locator('.lost_password > a');
  }

  async loadMyAccountPage() {
    const pageTitle = await this.pageTitle;
    await this.page.goto('my-account/');
    expect(pageTitle).toContainText('My account');
  }

  async fillRegisterForm(email: string, password: string) {
    await this.registerEmailInput.fill(email);
    await this.registerPasswordInput.fill(password);
  }

  async fillLoginForm(login: string, password: string) {
    await this.loginUsernameInput.fill(login);
    await this.loginPasswordInput.fill(password);
  }
}
