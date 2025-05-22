const {test, expect} = require('@playwright/test')

test.skip('Single File', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.waitForSelector("#singleFileInput")
    await page.focus("#singleFileInput")
    const ChooseFile = await page.locator("#singleFileInput")
    await ChooseFile.click()
    //Upload files
    await ChooseFile.setInputFiles("tests/UploadFiles/Sample Resume Format - 1.docx")
    await page.locator("//button[normalize-space()='Upload Single File']").click()


    await page.waitForTimeout(5000)
})

test('Multiple Files', async ({page})=>{

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    
    await page.locator('#filesToUpload').focus()
    //Upload Multiple files
    await page.locator('#filesToUpload')
                .setInputFiles(['tests/UploadFiles/Sample Resume Format - 1.docx',
                                'tests/UploadFiles/Sample Resume Format - 2.docx'])

    await page.waitForTimeout(3000)
    //Validate files are uploaded
    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('Sample Resume Format - 1.docx')
    await expect(page.locator('#fileList li:nth-child(2)')).toHaveText('Sample Resume Format - 2.docx')
    
    await page.waitForTimeout(3000)
    //Remove files 
    await page.locator('#filesToUpload').setInputFiles([])
    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')
    
    await page.waitForTimeout(5000)

})