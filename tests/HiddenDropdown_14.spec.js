const {test, expect} = require('@playwright/test')

test('Handle Hidden Dropdown', async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.fill("//input[@name='username']",'Admin')
    await page.fill("//input[@name='password']",'admin123')
    await page.click("button[type='submit']")

    await page.click("//span[normalize-space()='PIM']")

    await page.click('//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]')

    const options = await page.$$("//div[@role='listbox']//span")
    for(let option of options){

        const jobTitle = await option.textContent()
        console.log(jobTitle)
        if(jobTitle.includes('QA Engineer')){
            await option.click()
            break;
        }
    }

    await page.waitForTimeout(5000)

})