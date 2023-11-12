import {test, expect} from '@playwright/test'

test.beforeEach( async ({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('[data-test="username"]').fill('visual_user')
    await page.locator('[data-test="password"]').fill('secret_sauce')
    await page.locator('[data-test="login-button"]').click()
    // await page.close()
})

test.afterEach(async ({page})=>{
    await page.close()
})

test('homePage', async ({page})=>{
    // await page.goto('https://www.saucedemo.com/')
    // await page.locator('[data-test="username"]').fill('visual_user')
    // await page.locator('[data-test="password"]').fill('secret_sauce')
    // await page.locator('[data-test="login-button"]').click()

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('#item_1_title_link').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    // await page.close()
})

test('logout', async ({page})=>{
    // await page.goto('https://www.saucedemo.com/')
    // await page.locator('[data-test="username"]').fill('visual_user')
    // await page.locator('[data-test="password"]').fill('secret_sauce')
    // await page.locator('[data-test="login-button"]').click()

    await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

    // await page.close()
})