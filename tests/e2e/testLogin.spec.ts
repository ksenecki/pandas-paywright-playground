import { MyAccountPage } from '@page-objects/MyAccountPage';
import { expect, test } from '@playwright/test';
import { getRandomString } from '@utils/data-helpers';
import { allure } from 'allure-playwright';

test.describe('Test Login Form', () => {
  let myAccountPage: MyAccountPage;
  test.beforeEach(async ({ page }, testInfo) => {
    allure.suite('E2E: Login');
    myAccountPage = new MyAccountPage(page);
    await myAccountPage.loadMyAccountPage();
  });

  test('Empty Login form', async ({ page }) => {
    await myAccountPage.loginSubmitButton.click();
    expect(myAccountPage.errorMessage).toContainText(
      'Error: Username is required.'
    );
  });

  test('Empty Register Email field', async ({ page }) => {
    const randomPassword = await getRandomString();
    await myAccountPage.fillLoginForm('', `${randomPassword}`);
    await myAccountPage.loginSubmitButton.click();
    expect(myAccountPage.errorMessage).toContainText(
      'Error: Username is required.'
    );
  });

  test('Empty Register Password field', async ({ page }) => {
    const randomEmail = (await getRandomString()) + '@example.com';
    await myAccountPage.fillLoginForm(`${randomEmail}`, '');
    await myAccountPage.loginSubmitButton.click();
    expect(myAccountPage.errorMessage).toContainText(
      'Error: A user could not be found with this email address.'
    );
  });
});
