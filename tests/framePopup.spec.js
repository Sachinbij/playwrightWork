const{test,expect}=require('@playwright/test')

test("@web workingwithDialogAndFrame",async({page})=>{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
//await page.pause()
await expect(page.locator('#displayed-text')).toBeVisible();
await page.locator('#hide-textbox').click();
await expect( page.locator('#displayed-text')).toBeHidden();

// handling the popup 
await page.on('dialog',dialog=>dialog.accept());
await page.locator('#confirmbtn').click();

// mouseover

await page.locator('#mousehover').hover()

// Frame
const frame= page.frameLocator('#courses-iframe')

await frame.locator(".main-menu [href='lifetime-access']:visible").click()

const text=await frame.locator('.text h2').textContent()
const requiredText=await text.split(" ")[1]
console.log(requiredText)







});