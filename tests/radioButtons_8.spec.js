const { test, expect } = require("@playwright/test")

test('Handle Radio buttons', async ({page})=>{

    await page.goto('https://practice.expandtesting.com/radio-buttons')
    
    await expect(await page.locator("//input[@value='black']")).toBeVisible()
    console.log('Locator is correct')
    await page.locator("//input[@value='black']").check()
    await expect(await page.locator("//input[@value='black']")).toBeChecked()
    await expect(await page.locator("//input[@value='black']").isChecked()).toBeTruthy()
    
    await expect(await page.locator("//input[@value='football']").isChecked()).toBeFalsy()


    await page.waitForTimeout(5000)

})