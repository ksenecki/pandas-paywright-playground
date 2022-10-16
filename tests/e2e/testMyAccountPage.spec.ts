import { MyAccountPage } from '@page-objects/MyAccountPage';
import { expect, test } from '@playwright/test';
import { getRandomString } from '@utils/data-helpers';
import { allure } from 'allure-playwright';

test.describe('My Account Page', () => {
  let myAccountPage: MyAccountPage;
  test.beforeEach(async ({ page }, testInfo) => {
    allure.suite('E2E: My Account');
    myAccountPage = new MyAccountPage(page);
    await myAccountPage.loadMyAccountPage();
  });

  test('Empty Register form', async ({ page }) => {
    await myAccountPage.registerSubmitButton.click();
    expect(myAccountPage.errorMessage).toContainText(
      'Please provide a valid email address.'
    );
  });

  test.only('Empty Register Email field', async ({ page }) => {
    let randomPassword = await getRandomString(); // <<<<<<<<<<<<<<<<<<<<<<<< does not work
    console.log(typeof randomPassword);
    //await myAccountPage.fillRegisterForm("", "");
  });
});
