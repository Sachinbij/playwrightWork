const{test,expect}=require('@playwright/test');

// test('JaishreeRam',async ({browser})=>{
//     const context =await browser.newContext();

//      const page =await context.newPage();
//      await page.goto("https://www.google.com/");
//      console.log(await page.title());
//      await expect(page).toHaveTitle("Google");



// });


test('Diret to the page', async({page})=>{

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const userName=page.locator('#username')
const password=page.locator("[name='password']")
const signInButton=page .locator('.btn.btn-info.btn-md')
await userName.fill('sachinbi@gmail.com')
await password.fill('password')
await signInButton.click()
var errorMessage=await page.locator("[style*='block']")
console.log(await errorMessage.textContent())


//await expect(page.locator('.error')).toContainText('Incorrect');

await expect(errorMessage).toContainText('Incorrect')
await userName.fill("")   // this will clear 
await userName.fill("rahulshettyacademy") 
await password.fill('Learning@830$3mK2')
await signInButton.click()

const productName=page.locator('.card-body a')


var firstTesxt=await productName.first().textContent()
var second=await productName.nth(2).textContent()
console.log(firstTesxt)
console.log(second)

console.log(await page.locator('.card-body a').allTextContents())




});