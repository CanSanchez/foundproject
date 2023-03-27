const { devices } = require('@playwright/test');

/** @type {import('playwright/test').PlaywrightTestConfig} */
const config = {
    // Option shared for all projects
    timeout: 30000,
    use: {
        ignoreHTTPSErrors: true,
    },

    projects: [
        {
            name: 'Desktop Chrome',
            use: {
                browserName: 'chromium',
                viewport: { width: 1280, height: 720 },
            },
        },
        {
            name: 'Desktop Firefox',
            use: {
                browserName: 'firefox',
                viewport: { width: 1280, height: 720 },
            },
        },
        {
            name: 'Desktop Safari',
            use: {
                browserName: 'webkit',
                viewport: { width: 1280, height: 720 },
                // contextOptions: {
                //     recordHar: false
                // },
                // beforeEach: async (context) => {
                //     const page = await context.newPage();
                //     await page.goto('about:blank');
                //     await page.close();
                // },
            },
        },
        {
            name: 'Mobile Chrome',
            use: {
                browserName: 'chromium',
                ...devices['iPhone XR'],
                viewport: { width: 414, height: 896 },
            },
        },
        {
            name: 'Tablet Chrome',
            use: {
                browserName: 'chromium',
                ...devices['iPad Air'],
                viewport: { width: 820, height: 1180 },
            }
        }
    ]
}

module.exports = config;