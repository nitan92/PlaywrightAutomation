const{test, except, expect} = require('@playwright/test')

test('Soft Assertions', async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

    /*// Hard Assertions
    await expect(page).toHaveTitle('STORES')
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html2')
    await expect(page.locator('#navbarExample')).toBeVisible()
    */

    // Soft Assertions
    await expect.soft(page).toHaveTitle('STORES')
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html2')
    await expect.soft(page.locator('#navbarExample')).toBeVisible()

})