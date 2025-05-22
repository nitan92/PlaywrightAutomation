const {test,expect} = require("@playwright/test")

test('Handle Mouse Double Click', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    
    await page.locator("//button[normalize-space()='Copy Text']").focus()
    const button = await page.locator("//button[normalize-space()='Copy Text']")
    //doubleClick
    await button.dblclick()
    
    const f2 = await page.locator("//input[@id='field2']")
    await expect(f2).toHaveValue("Hello World!")

    await page.waitForTimeout(5000)
    await page.close()
})