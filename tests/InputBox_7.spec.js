const{test,expect} = require('@playwright/test')

test('handle inputbox', async({page})=>{

    await page.goto('https://practice.expandtesting.com/inputs')

    // inputbox 
    await expect(page.locator("//input[@id='input-text']")).toBeVisible()
    await expect(page.locator("//input[@id='input-text']")).toBeEmpty()
    await expect(page.locator("//input[@id='input-text']")).toBeEditable()
    await expect(page.locator("//input[@id='input-text']")).toBeEnabled()

    await page.fill("//input[@id='input-text']",'John')

    await page.waitForTimeout(5000)

})