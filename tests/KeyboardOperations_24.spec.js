const {test,expect} = require("@playwright/test")

test('Handle Keyboard Operations', async ({page})=>{

    await page.goto("https://gotranscript.com/text-compare")
    
    await page.type("//textarea[@placeholder='Paste one version of the text here.']",'Welcome to playwright automation')
    //Control + A select all content
    await page.keyboard.press('Control+A')
    //Control + C - Copy content
    await page.keyboard.press('Control+C')

    //Press TAB key
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')
    
    //Control+V Paste content
    await page.keyboard.press('Control+V')
    

    await page.waitForTimeout(5000)
    await page.close()
})