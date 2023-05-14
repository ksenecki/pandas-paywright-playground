import { HomePage } from '@page-objects/HomePage';
import { test } from '@playwright/test';
import playwright from 'playwright';
import { playAudit } from 'playwright-lighthouse';

test.describe.only('Lighthouse audit', () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.loadHomePage();
  });

  test('Audit skleptest', async ({ page }) => {
    const browser = await playwright['chromium'].launch({
      args: ['--remote-debugging-port=9222'],
    });

    await playAudit({
      page: page,
      thresholds: {
        performance: 50,
        accessibility: 50,
        'best-practices': 50,
        seo: 50,
        pwa: 50,
      },
      reports: {
        formats: {
          html: true,
        },
      },
      port: 9222,
    });

    await browser.close();
  });
});
