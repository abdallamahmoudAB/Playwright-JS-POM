import {test, expect} from '@playwright/test'

test('Login Test', async ({page}) =>{
    await page.goto('https://demo.applitools.com/')
    await page.pause()
    await page.locator('[id="username"]').fill('beni')
    await page.locator('[id="password"]').fill('123')
    await page.locator('[id="log-in"]').click
    
})