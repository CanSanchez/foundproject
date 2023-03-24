import { test, expect } from '@playwright/test';

let UrlScreening = "http://localhost:3000/screening";

test.beforeAll(async () => {
    console.log('before tests');
})

test.afterAll(async () => {
    console.log('After tests');
})

test.describe('Header area', () => {
    test('should load the page and display the title "Found"', async ({ page }) => {
            await page.goto(UrlScreening)

            await expect(page).toHaveTitle('Found: Getting Started');
        })

    test('The meta tag', async ({ page }) => { 
            // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
            await page.goto(UrlScreening)
            
            const metaDescriptionOne = page.locator('meta[name="description"]')
            await expect(metaDescriptionOne).toHaveAttribute("content", "Found is an app that digitizes missing pet posters. It aims to elimate paper wastes, boost exposure, and bring your best friend back home quickly and safely.")
        })

    test('The link tag', async ({ page }) => {
            await page.goto(UrlScreening)

            const linkTag = page.locator('link[rel="icon"]');
            await expect(linkTag).toHaveAttribute('href', '/logo_symbol_color.ico')
    })

});

test.describe('Main area', () => {
    
    test('Header Tag', async({ page }) => {
        await page.goto(UrlScreening)

        await expect(page.locator('h1')).toContainText('Tell us what happened?');
    })

    test('The Button tag name', async ({ page }) => {
        await page.goto(UrlScreening)

        const foundPetButton = page.getByRole('button', { name: 'I found a pet' });
        expect(foundPetButton).toBeTruthy();

        const lostPetButton = page.getByRole('button', { name: 'I lost a pet' });
        expect(lostPetButton).toBeTruthy();
    });

    test('A Tag', async({ page }) => {
        await page.goto(UrlScreening)

        await expect(page.locator('a')).toContainText('Skip to Home');
    })
})
