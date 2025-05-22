const {test,expect} = require('@playwright/test')

test('Handle Drag And Drop', async ({page})=>{

    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

    const rome = await page.locator("#box6")
    const italy = await page.locator("#box106")

    //Drag and Drop
    //Approach 1
    await rome.hover()
    await page.mouse.down()

    await italy.hover()
    await page.mouse.up()
    
    //Approach 2
    const washington = await page.locator("#box3")
    const usa = await page.locator("#box103")

    await washington.dragTo(usa)



    await page.waitForTimeout(5000)
    await page.close()
})