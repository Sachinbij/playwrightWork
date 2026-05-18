const{test,expect}=require('@playwright/test');

test('DropDownAndRadio',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const blinktext=page.locator("[href*='documents-request']")

    let dropdwn=await page.locator('select.form-control');
   // await page.selectOption('select.form-control','teach')
    // or select by idex
    await dropdwn.selectOption({index: 2})


    // radio button 
    await page.locator('span.radiotextsty').last().click()
    await page.locator('#okayBtn').click()
    await expect(page.locator('span.radiotextsty').last()).toBeChecked()

    var falg=await page.locator('span.radiotextsty').last().isChecked()
    console.log(falg)

    await page.locator('#terms').click()

    
    await expect(page.locator('#terms')).toBeChecked()
    // to uncheck use the built in method 
   await page.locator('#terms').uncheck
    expect(await page.locator('#terms').isChecked()).toBeFalsy
    await expect(blinktext).toHaveAttribute('class','blinkingText')

   // to pause the page after all the actions
    await page.pause()



});


test('handling the window',async({browser})=>{
const context=await browser.newContext()
const page =await context.newPage()
await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
const blinktext=page.locator("[href*='documents-request']")

const [newPage]= await Promise.all([
context.waitForEvent('page'),
blinktext.click()
])

var text=await newPage.locator('p.red').textContent()
console.log(text)
let arr=text.split('@')
let domain=arr[1].split(' ')[0]
console.log(domain)
console.log('8888888888888888888888888888888888')
await page.locator('#username').type(domain)
//await userNameText.fill(domain)
console.log(await page.locator('#username').inputValue());
await page.pause()




});