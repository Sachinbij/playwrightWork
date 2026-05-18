 const{test, expect}=require('@playwright/test');
const { count, clear } = require('node:console');

 test('Placing the order',async({page})=>{
    const productname='ZARA COAT 3'
    const email='sachinbijawad97@gmail.com'
    
  await page.goto('https://rahulshettyacademy.com/client')
    await page.locator("#userEmail").fill('sachinbijawad97@gmail.com');
    await page.locator("#userPassword").type("Test@2197");
    await page.locator("[value='Login']").click(); 
    //await page.waitForLoadState('networkidle')
    // OR 
    await page.locator('.card-body').first().waitFor()
     const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
    const products= page.locator('.card-body')
    const productCount=await page.locator('.card-body').count()
    console.log("77777777777777777777777777777777777777777")
    console.log(productCount)
    console.log("77777777777777777777777777777777777777777")


    for(let i=0;i<productCount;++i){

        if(await products.nth(i).locator("b").textContent()===productname){
           await products.nth(i).locator("text= Add To Cart").click();
           break;
        }

        
        
        
    }

    await page.locator("[routerlink*='cart']").click()
    
    let bool=await page.locator('h3:has-text("ZARA COAT 3")').isVisible();
      expect(bool).toBeTruthy()

    await page .locator('button:has-text("Checkout")').click()

    await page .getByPlaceholder('Select Country').pressSequentially('indo',{delay:350})
    const countryDrop= page.locator('section.ta-results')
    await countryDrop.waitFor({ state: 'visible' });
    let Contry_Count=await countryDrop.locator("button").count()
    
    console.log(Contry_Count)
 
    
    for(let i=0;i< Contry_Count;++i){
      //await page.pause()
      const countrytext=await countryDrop.locator("button").nth(i).textContent();

      if(countrytext.trim() ==="Indonesia"){
         console.log(countrytext.trim())
        await countryDrop.locator("button").nth(i).click();
         
         break;

      }
     
    }
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