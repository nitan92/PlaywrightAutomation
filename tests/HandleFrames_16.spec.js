const{test, expect} = require('@playwright/test')

test('Handle Frames', async ({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/")

    //total number of frames

    const allFrames = await page.frames()
    console.log("Number of frames:",allFrames.length)

    //Approach 1: using name or url of frame
    //const frame1 = await page.frame('Name') // If frame name is present
    const frame1 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
    await frame1.fill("//input[@name='mytext1']",'Hello via frame Name OR frame URL')
    
    //refresh page
    await page.reload()
    //Approach 2: using frame locator
    const frame2 = await page.frameLocator("//frame[@src='frame_1.html']").locator("//input[@name='mytext1']")
    await frame2.fill('Hello via frame Locator')

    await page.waitForTimeout(5000)
})