const {test,expect} = require('@playwright/test')

test('Home Page Test',async ({page})=>{
    // Open Application
    await page.goto('https://demoblaze.com/index.html')
    //Click on Login
    await page.click('#login2')
    //Login
    await page.fill('#loginusername','pavanol')
    await page.fill('#loginpassword','test@123')
    await page.click("//button[normalize-space()='Log in']")
    
    //Home Page
    const products = await page.$$('.card-block')
    expect(products).toHaveLenght(9)
    
    //Logout
    await page.click('#logout2')
    

})

test('Add Product to cart',async ({page})=>{
    // Open Application
    
    //Click on Login

    //Login

    //Home Page

    //Logout


})