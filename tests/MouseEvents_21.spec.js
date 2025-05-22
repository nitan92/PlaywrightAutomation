const {test,expect} = require("@playwright/test")

test('Handle Mouse Right Click', async ({page})=>{

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")
    
    await page.locator("//span[@class='context-menu-one btn btn-neutral']").focus()
    const button = await page.locator("//span[@class='context-menu-one btn btn-neutral']")
    //mouse right click 
    await button.click({button: 'right'})
    
    await page.waitForTimeout(5000)
    await page.close()
})