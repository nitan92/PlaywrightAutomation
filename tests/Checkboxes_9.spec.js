const { test, expect } = require("@playwright/test")

test('Handle Checkboxes', async ({page})=>{

    await page.goto('https://practice.expandtesting.com/checkboxes')
        
    //single checkbox
    //await page.locator("//input[@id='checkbox1' and @type='checkbox']").check()
    await page.check("//input[@id='checkbox1' and @type='checkbox']")
    await expect(await page.locator("//input[@id='checkbox1' and @type='checkbox']")).toBeChecked()
    await expect(await page.locator("//input[@id='checkbox1' and @type='checkbox']").isChecked()).toBeTruthy()
    
    
    
    // Multiple checkboxes
    const checkboxLocators = [
        await page.locator("//input[@id='checkbox1' and @type='checkbox']"),
        await page.locator("//input[@id='checkbox2' and @type='checkbox']")

    ];
    await page.waitForTimeout(5000)
    
try {
        for (const checkboxElement of checkboxLocators) {
             const locator = page.locator(checkboxElement);
            if (await locator.isChecked()) {
                await locator.uncheck();
            } else {
                await locator.check();
            }
         }
    } catch (error) {
        console.error('Error handling checkboxes:', error);
    }
    


    await page.waitForTimeout(5000)

})