import { LostPasswordPage } from '@page-objects/LostPasswordPage';
import { expect, test } from '@playwright/test';
import { getRandomString } from '@utils/data-helpers';
import { allure } from 'allure-playwright';

test.describe('Test Lost Password Form', () => {
  let lostPasswordPage: LostPasswordPage;
  test.beforeEach(async ({ page }, testInfo) => {
    allure.suite('E2E: Lost Password');
    lostPasswordPage = new LostPasswordPage(page);
    await lostPasswordPage.loadLostPasswordPage();
  });

  test('Lost Password invalid email', async ({ page }) => {
    const randomEmail = (await getRandomString()) + '@example.com';
    await lostPasswordPage.usernameInput.fill(`${randomEmail}`);
    await lostPasswordPage.resetPasswordButton.click();
    expect(lostPasswordPage.errorMessage).toContainText(
      'Invalid username or email.'
    );
  });
});
