# Pandas-Playwright-Playground

This is my Playwright playground

automation e2e tests for `http://skleptest.pl/`

## Project requirements

1. [Node 12+](https://nodejs.org/en/docs/)
2. [yarn](https://yarnpkg.com/package/doc)

## How to setup the Project

1. Clone repository
2. Enter the project directory and execute `yarn` in order to install all the packages

## Install Playwright

1. npm install @playwright/test
2. npx playwright install

## Starting e2e test execution

- basic test execution: `npx playwright test --headed` where `tests/e2e` is a deafult directory
- run tests using npm with chromium: `npm run tests:chrome` that uses default `tests/e2e` directory
- also works for `tests:firefox` and `tests:webkit`
- test directory can be changed in `playwright.config.ts`
- it is possible to add more flags with `-- --flag`
- run tests with reporter: `npx playwright test --reporter=html` or `reporter.ts` for CI custom one

## Visual regression tests

- run `npx playwright test --config=visual.config.ts`
- it will fail on first run as it has to save actual shapshots that can be used for comparison
- update snapshots `npx playwright test --config=visual.config.ts --update-snapshots`
- generate custom screenshots with `npx playwright screenshot --device="iPhone 11" --color-scheme=dark --wait-for-timeout=3000 http://skleptest.pl/ testshop-iphone-image.png`

## Debugging

- use `--debug` while debugging
