const{test,expect} = require('@playwright/test')

test('Handle Date Picker', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    
    //Handle Date Picker
    await page.focus("//input[@id='datepicker']")
    //await page.fill("//input[@id='datepicker']",'06/30/2025')

    //Handle Date Picker if fill is not possible
    const year = "2025"
    const month = "July"
    const date = "11"

    await page.click("//input[@id='datepicker']")

    while(true){

        const currentYear =  await page.locator(".ui-datepicker-year").textContent()
        const currentMonth =  await page.locator(".ui-datepicker-month").textContent()

        if(currentYear == year && currentMonth==month){
            break

        }

            await page.click("(//a[@title='Next'])[1]") //Click Next button

    }
    //date selection using loop
    const dates = await page.$$("//a[@class='ui-state-default']")
   /* for(const dt of dates){

        if(await dt.textContent()==date){
            await dt.click()
            break
        }
    }*/
    // date selection - without loop

    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)
    await page.waitForTimeout(5000)
    
})