const {test, expect} = require('@playwright/test')

test('Handle MultiSelect dropdowns', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')    
    
    //Select Multiple options from multi select dropdown
    await page.selectOption('#colors',['Blue','Green','Yellow'])

    // Dropdown assertions
    //1) Check number of options
    const options = page.locator('#colors option')
    await expect(options).toHaveCount(7)

    //2) Check number of options in dropdown using JS array
    const options1 = await page.$$('#colors option')
    console.log("Number of options are: ",options1.length)
    await expect(options1.length).toBe(7)

    //3) Check the presence of the value in dropdown
    const content = await page.locator('#colors').textContent()
    await expect(content.includes('Blue')).toBeTruthy()
    await expect(content.includes('Black')).toBeFalsy()

    await page.waitForTimeout(5000)

})