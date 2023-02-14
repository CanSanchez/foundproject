import { test, expect } from '@playwright/test';

let UrlScreening = "http://localhost:3001/screening";

test.beforeAll(async () => {
    console.log('before tests');
})

test.afterAll(async () => {
    console.log('After tests');
})

test.describe('Header area', () => {
    test('should load the page and display the title "Found"', async ({ page }) => {
            await page.goto(UrlScreening)

            await expect(page).toHaveTitle('Found');
        })

    test('The meta tag', async ({ page }) => { 
            // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
            await page.goto(UrlScreening)
            
            const metaDescriptionOne = page.locator('meta[name="description"]')
            await expect(metaDescriptionOne).toHaveAttribute("content", "Found is an app that digitizes missing pet posters. It aims to elimate paper wastes, boost exposure, and bring your best friend back home quickly and safely.")
    
            const metaDescriptionThree = page.locator('meta[name="viewport"]');
            await expect(metaDescriptionThree).toHaveAttribute('content', "width=device-width, initial-scale=1")
        })

    test('The link tag', async ({ page }) => {
            await page.goto(UrlScreening)

            const linkTag = page.locator('link[rel="icon"]');
            await expect(linkTag).toHaveAttribute('href', '/logo_symbol_color.ico')

            const googleFont = page.locator('link[rel="stylesheet"]');
            await expect(googleFont).toHaveAttribute('href', 'https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap')
    })

});

test.describe('Main area', () => {
    test('Count number of div in main tag', async ({ page }) => {
        await page.goto(UrlScreening)

        await expect(page.locator('main > div')).toHaveCount(1);
    });

    // test('Count number of div in div tag', async ({ page }) => {
    //     await page.goto(UrlScreening)

    //     await expect(page.locator('main > div > div')).toHaveCount(1);
    // });
    
    test('Header Tag', async({ page }) => {
        await page.goto(UrlScreening)

        await expect(page.locator('h1')).toContainText('Tell us what happened?');
    })

    // test('Count number of button in main tag', async ({ page }) => {
    //     await page.goto(UrlScreening)

    //     await expect(page.locator('main > Button')).toHaveCount(2);
    // });

    test('The Button tag name', async ({ page }) => {
        await page.goto(UrlScreening)

        await page.getByRole('button', { name: 'I found a pet' }).click();
        
        await page.getByRole('button', { name: 'I lost a pet' }).click();

    });

    test('Count number of a in main tag', async ({ page }) => {
        await page.goto(UrlScreening)

        await expect(page.locator('main > a')).toHaveCount(1);
    });

    test('A Tag', async({ page }) => {
        await page.goto(UrlScreening)

        await expect(page.locator('a')).toContainText('Skip to Homepage');
    })
})
