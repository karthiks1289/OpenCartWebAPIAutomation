import { defineConfig, devices } from '@playwright/test';
import {config} from "dotenv"

//Capture Environment details passed from command Eg : ENV="qa" npx playwright test
const currentEnv = process.env.ENV || "qa";
//Print user passed environment details
console.log("Current Environement is "+currentEnv);
//Loads .env file contents into process.env by default.
config({path:`./config/.env.${currentEnv}`})

export default defineConfig({
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  //workers: process.env.CI ? 1 : undefined,
    ...(process.env.CI ? { workers: 1 } : {}),

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', {outputFolder:"reports/html-report", open:"never"}],['list'],["allure-playwright", {outputFolder:"allure-results",suiteTitle:true}]],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless : false,
    trace: 'on-first-retry',
    baseURL : 'https://naveenautomationlabs.com/'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
});
