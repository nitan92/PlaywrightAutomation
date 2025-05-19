const {test, expect} = require('@playwright/test')

test('Assertions',async ({page})=>{
    // Open Url
    await page.goto('https://demo.nopcommerce.com/register')
    
    // URL assertion
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    // Title assertion
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    // Element is visible assertion
    await expect(page.locator(".header-logo")).toBeVisible()
    
    // Element is enabled assertion
    await expect(page.locator('#small-searchterms')).toBeEnabled()
    // Element is disabled assertion
    const femaleRadioButton = page.locator('.female')
    await expect(femaleRadioButton).not.toBeDisabled()
    
    // Checkbox is checked assertion
    const maleRadioButton = page.locator('#gender-male')
    await maleRadioButton.click()
    await expect(maleRadioButton).toBeChecked()
    const newsletter = page.locator('#Newsletter')
    await expect(newsletter).toBeChecked()
    
    // await expect(locator).toHaveAttribute()	Element has a DOM attribute assertion
    const regButton = page.locator('#register-button')
    await expect(regButton).toHaveAttribute('type','submit')

    // await expect(locator).toHaveText()	Element matches text assertion
    await expect(page.locator(".page-title h1")).toHaveText('Register')

    // await expect(locator).toContainText()	Element contains text assertion
    await expect(page.locator(".page-title h1")).toContainText('Regi')
    
    // await expect(locator).toHaveValue()	Input has a value assertion
    const emailValue = page.locator('#Email')
    await emailValue.fill('test@test.com')
    await expect(emailValue).toHaveValue('test@test.com')

    // await expect(locator).toHaveCount()	List has exact number of children


})