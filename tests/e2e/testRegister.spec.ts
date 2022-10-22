import { MyAccountPage } from '@page-objects/MyAccountPage';
import { expect, test } from '@playwright/test';
import { getRandomString } from '@utils/data-helpers';
import { allure } from 'allure-playwright';

test.describe('Test Register Form', () => {
  let myAccountPage: MyAccountPage;
  test.beforeEach(async ({ page }, testInfo) => {
    allure.suite('E2E: Register');
    myAccountPage = new MyAccountPage(page);
    await myAccountPage.loadMyAccountPage();
  });

  test.skip('Empty Register form', async ({ page }) => {
    //Test may not work properly
    await myAccountPage.registerSubmitButton.click();
    expect(myAccountPage.errorMessage).toContainText(
      'Error: Please provide a valid email address.'
    );
  });

  test.skip('Empty Register Email field', async ({ page }) => {
    //Test may not work properly
    const randomPassword = await getRandomString();
    await myAccountPage.fillRegisterForm('', `${randomPassword}`);
    await myAccountPage.registerSubmitButton.click();
    expect(myAccountPage.errorMessage).toContainText(
      'Error: Please provide a valid email address.'
    );
  });

  test('Empty Register Password field', async ({ page }) => {
    const randomEmail = (await getRandomString()) + '@example.com';
    await myAccountPage.fillRegisterForm(`${randomEmail}`, '');
    await myAccountPage.registerSubmitButton.click();
    expect(myAccountPage.errorMessage).toContainText(
      'Error: Please enter an account password.'
    );
  });
});
