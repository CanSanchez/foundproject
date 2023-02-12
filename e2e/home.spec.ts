import { test, expect } from '@playwright/test';

let urlHome = "http://localhost:3000";

test.describe('Header area', () => {
    test('The title tag', async({ page }) => {
        await page.goto(urlHome)

        await expect(page).toHaveTitle('Found');
    })

    test('The meta tag', async ({ page }) => { 
        await page.goto(urlHome)
        
        const metaDescriptionOne = page.locator('meta[name="description"]')
        await expect(metaDescriptionOne).toHaveAttribute("content", "Found is an app that digitizes missing pet posters. It aims to elimate paper wastes, boost exposure, and bring your best friend back home quickly and safely.")
    })
})

test.describe('Main area', () => {
    test('Header Tag', async({ page }) => {
        await page.goto(urlHome)

        await expect(page.locator('h1')).toContainText('Never lose your bestfriend again');
    })

    test('More About Us Button', async({ page }) => { 
        await page.goto(urlHome)

        await page.getByRole('button', { name: 'Get Started' }).click();
    })
})