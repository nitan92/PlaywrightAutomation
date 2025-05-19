const {test, expect} = require('@playwright/test')

test('Handle Dropdown',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')

    // label
    await page.locator("//select[@id='country' and @class='form-control']").selectOption({label:'India'})
    // visible text
    await page.locator("//select[@id='country' and @class='form-control']").selectOption('Australia')
    // Value
    await page.locator("//select[@id='country' and @class='form-control']").selectOption({value:'uk'})
    // Index
    await page.locator("//select[@id='country' and @class='form-control']").selectOption({index: 6})
    // direct calling function
    await page.selectOption("//select[@id='country' and @class='form-control']","uk")

// Assertions
//Appraoch 1) check number of options in dropdown
    //await page.waitForTimeout(2000)    
    const options1 = await page.locator("#country option")
    await expect(options1).toHaveCount(10)

//Appraoch 2) check number of options in dropdow 
    const options2 = await page.$$('#country option')
    console.log('Number of options: ', options2.length)
    await expect(options2.length).toBe(10)

//Appraoch 3) check number of options in dropdow 
    const content = await page.locator('#country').textContent()
    await expect(content.includes('India')).toBeTruthy()

    await page.waitForTimeout(5000)
    await page.close()

})