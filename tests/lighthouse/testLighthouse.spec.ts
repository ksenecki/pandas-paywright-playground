import { HomePage } from '@page-objects/HomePage';
import { expect, test } from '@playwright/test';
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

// import { chromium } from 'playwright';
// import type { Browser } from 'playwright';
// import { playAudit } from 'playwright-lighthouse';
// import { test as base } from '@playwright/test';
// import getPort from 'get-port';

// export const lighthouseTest = base.extend<
//   {},
//   { port: number; browser: Browser }
// >({
//   port: [
//     async ({}, use) => {
//       // Assign a unique port for each playwright worker to support parallel tests
//       const port = await getPort();
//       await use(port);
//     },
//     { scope: 'worker' },
//   ],

//   browser: [
//     async ({ port }, use) => {
//       const browser = await chromium.launch({
//         args: [`--remote-debugging-port=${port}`],
//       });
//       await use(browser);
//     },
//     { scope: 'worker' },
//   ],
// });

// lighthouseTest.describe('Lighthouse', () => {
//   lighthouseTest('should pass lighthouse tests', async ({ page, port }) => {
//     await page.goto('https://skleptest.pl/');
//     await page.waitForSelector("a[class='site-title']");
//     await playAudit({
//       page,
//       port,
//     });
//   });
// });
