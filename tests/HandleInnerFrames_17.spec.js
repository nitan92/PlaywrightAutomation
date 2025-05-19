const{test, expect} = require('@playwright/test')

test('Handle Inner Frames', async ({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/")

    const frame3 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
    //await frame3.locator("input[name='mytext3']").fill("Test Frame 3 input box")
    
    //Nested frames
    const childFrames = await frame3.childFrames()
    await childFrames[0].locator("#i6").check()

    await page.waitForTimeout(5000)
})