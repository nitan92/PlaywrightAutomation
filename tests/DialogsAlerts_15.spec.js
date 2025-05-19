const {test, expect} = require('@playwright/test')

test('Handle Alert', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    
    //Enabling Dialog window handler
    await page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()

    })
    await page.click('#alertBtn')


    await page.waitForTimeout(5000)

})
test('Handle Confirmation Alert', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    
    //Enabling Dialog window handler
    await page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept() // close by clicking on OK button
        //await dialog.dismiss() // close by clicking on CANCEL button

    })
    await page.click('#confirmBtn')
    await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!")


    await page.waitForTimeout(5000)

})
test('Handle Prompt Dialog', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    
    //Enabling Dialog window handler
    await page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('Nitan Rana') // close by clicking on OK button
        //await dialog.dismiss() // close by clicking on CANCEL button

    })
    await page.click('#promptBtn')
    await expect(page.locator("//p[@id='demo']")).toHaveText("Hello Nitan Rana! How are you today?")


    await page.waitForTimeout(5000)

})