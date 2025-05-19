const {test, expect} = require('@playwright/test')

test('Handle Table', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    const table = await page.locator("#productTable")
    
    // 1) total number of rows and coloumns in table
    const coloumns = await table.locator("thead tr th")
    console.log("Number of table coloumns", await coloumns.count())
    expect(await coloumns.count()).toBe(4)
    
    const rows = table.locator("tbody tr")
    console.log("Number of table rows", await rows.count())
    expect(await rows.count()).toBe(5)

    /*// 2) Select checkbox based on given product name

    const matchedRow = rows.filter({
        has: page.locator("td"),
        hasText: 'Smartwatch'

    })
    await matchedRow.locator('input').check()

    // 3) Select multiple products by re-usable function
    
    await selectProduct(rows, page, 'Smartphone')
    await selectProduct(rows, page, 'Laptop')
    await selectProduct(rows, page, 'Tablet')

    // 4) print all product details using loop
    for(let i = 0; i < await rows.count(); i++){

       const row = rows.nth(i)
       const tds = await row.locator('td')

        for(let j = 0; j < await tds.count()-1; j++){

            console.log(await tds.nth(j).textContent())

        }

    }*/

    // 5) Read data from all the pages

    const pages = await page.locator(".pagination li a")
    console.log("Number of total pages:", await pages.count())
    for(let p = 0; p < await pages.count(); p++){

        if(p>0){
            await pages.nth(p).click()
        }
        for(let i = 0; i < await rows.count(); i++){

        const row = rows.nth(i)
        const tds = await row.locator('td')

        for(let j = 0; j < await tds.count()-1; j++){

            console.log(await tds.nth(j).textContent())

        } 
    }await page.waitForTimeout(3000)
    }
    
    await page.waitForTimeout(5000)

})


async function selectProduct(rows, page, name){
        const matchedRow = rows.filter({
        has: page.locator("td"),
        hasText: name

    })
    await matchedRow.locator('input').check()
    }