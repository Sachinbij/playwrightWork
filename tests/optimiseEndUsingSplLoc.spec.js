 const{test, expect}=require('@playwright/test');
const { count, clear } = require('node:console');

 test('Placing the order',async({page})=>{
    const productname='ZARA COAT 3'
    const email='sachinbijawad97@gmail.com'
  await page.goto('https://rahulshettyacademy.com/client')
    await page.getByPlaceholder('email@example.com').fill('sachinbijawad97@gmail.com');
    await page.getByPlaceholder('enter your passsword').type("Test@2197");
    await page.getByRole('button',{name:'Login'}).click(); 
    //await page.waitForLoadState('networkidle')
    // OR 
    await page.locator('.card-body').first().waitFor()
    await page.locator('.card-body').filter({hasText:productname}).getByRole('button',{name:' Add To Cart'}).click()
    await page.getByRole('listitem').getByRole('button',{name:'Cart'}).click()
    
    let bool=await page.locator('h3:has-text("ZARA COAT 3")').isVisible();
      expect(bool).toBeTruthy()
    await page.getByRole('button',{name:'Checkout'}).click()
    await page .getByPlaceholder('Select Country').pressSequentially('ind',{delay:350})
     await page.getByRole("button",{name :"India"}).nth(1).click();
    await page.locator("body").click();

    
       await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
       await page.locator(".action__submit").scrollIntoViewIfNeeded();
await page.locator(".action__submit").click();

        //await page.locator('button:has-text("Place Order ")').click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
      await page.locator("button[routerlink*='myorders']").click();
      await page.locator('tbody').waitFor({state:'visible'});
      const row=await page.locator('tbody tr')
//await page.pause()
      for(let i=0;i<await row.count();++i){
         const orderiDColumn=await row.nth(i).locator('th').textContent()
         if(orderId.includes(orderiDColumn)){
            await row.nth(i).locator('button').first().click()
            break;
         }

      }
       const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
    



 });