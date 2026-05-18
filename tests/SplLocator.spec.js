 const{test,expect}=require('@playwright/test')

 test('usageof Special locators',async({page})=>{
await page.goto('https://rahulshettyacademy.com/angularpractice/')
await page.getByLabel('Check me out if you Love IceCreams!').click()
await page.getByLabel('Student').click()
await page .getByLabel('Gender').selectOption('Female')

// getByROLE 

await page.getByRole('button',{name:'Submit'}).click()
const boolvalue=await page.getByText('Success! The Form has been submitted successfully!').isVisible()
expect(boolvalue).toBeTruthy();
await page.getByRole('link',{name:'Shop'}).click();
await page.locator('app-card').first().waitFor({state:'visible'})

// filtering the UI elements ad clickin on it 
await page.locator('app-card').filter({hasText:'Samsung Note 8'}).getByRole('button').click()

await page.locator().filter()







 });