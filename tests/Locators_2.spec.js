//const { test, expect } = require('@playwright/test')
import {test, expect} from '@playwright/test'

test('Locators', async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')
    //Locator methods
    //1. await page.locator(property).action()
    //await page.locator('id=login2').click()
    await page.click('id=login2')
    //await expect(page.getByText('Log in')).toBeVisible()

    //provide username using CSS
    await page.locator('#loginusername').fill('pavanol')
    //await page.fill('#loginusername','pavanol')
    //await page.type('#loginusername','pavanol')
    
    //custom CSS for password
    await page.fill("input[id='loginpassword']",'test@123')

    //click on submit button
    await page.click("button[onclick='logIn()']")

    //Validate if user is logged in
    await expect(page.getByText('Log out')).toBeVisible()

    await page.close()

})