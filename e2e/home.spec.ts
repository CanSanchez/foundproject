import { test, expect } from '@playwright/test';

let urlHomePage = "http://localhost:3000/home";

test.describe('Header area', () => {
    test('The title tag', async({ page }) => {
        await page.goto(urlHomePage)

        await expect(page).toHaveTitle('Found: Home');
    })

    test('The meta tag', async ({ page }) => { 
        await page.goto(urlHomePage)
        
        const metaDescriptionOne = page.locator('meta[name="description"]')
        await expect(metaDescriptionOne).toHaveAttribute("content", "Found is an app that digitizes missing pet posters. It aims to elimate paper wastes, boost exposure, and bring your best friend back home quickly and safely.")
    })
})

test.describe('Main area', () => {
    test('Header Tag', async({ page }) => {
        await page.goto(urlHomePage)

        const postHeading = page.locator('h1');
        expect(postHeading).toBeTruthy();
    })


    test('Display Leaflet Map', async({ page }) => {

        await page.goto(urlHomePage)

        const map = page.locator('div.leaflet-container');
        expect(map).toBeTruthy();
    })
})