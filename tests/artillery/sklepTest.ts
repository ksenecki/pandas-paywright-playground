/*
Artillery Engine for Playwright does not support TS.
If you try to run JS file in TS project Artillery runner throws errors.
*/

module.exports = {
  testSklep,
  checkPage,
};

//@ts-expect-error
async function testSklep(page) {
  // This "page" is returned by artillery-engine-playwright
  await page.goto('https://skleptest.pl/');
}

//@ts-expect-error
async function checkPage(page, userContext, events) {
  // Those "page", "userContext" and "events" are returned by artillery-engine-playwright
  const url = userContext.vars.url;
  // url is taken from pages.csv
  const response = await page.goto(url);
  if (response.status() !== 200) {
    events.emit('counter', `user.status_check_failed.${url}`, 1);
  } else {
    events.emit('counter', `user.status_check_ok.${url}`, 1);
  }
}
