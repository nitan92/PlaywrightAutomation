const {test, expect} = require('@playwright/test')

test('Handle Bootstrap Dropdown', async({page})=>{

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')
    
    await page.locator('.multiselect').click()

    //1
    const options = await page.locator('ul>li label input')
    await expect(options).toHaveCount(11)
    
    //2
    const options_1 = await page.$$('ul>li label input')
    await expect(options_1.length).toBe(11)

    //3 select option from dropdown
    const options_2 = await page.$$('ul>li label')
    for(let option of options_2){

        const value = await option.textContent()
        //console.log("Value is:", value)
        if(value.includes('HTML') || value.includes('CSS')){

            await option.click()
            console.log("Value is:", value)
        }
    }

    await page.waitForTimeout(5000)

})