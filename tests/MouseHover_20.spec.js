const {test,expect} = require("@playwright/test")

test('Handle Mouse Events', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//button[normalize-space()='Point Me']").focus()
    await page.locator("//button[normalize-space()='Point Me']").hover()
    await page.locator("//a[normalize-space()='Mobiles']").hover()
    await page.locator("//a[normalize-space()='Laptops']").hover()
    await page.waitForTimeout(5000)
    await page.close()
})