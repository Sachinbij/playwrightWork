const{expect}=require('@playwright/test');

class CheckOutpage {

    constructor(page){
        this.page=page;
       this.countrytextField=  page.getByPlaceholder('Select Country')
       this.countryDropdown= page.locator('section.ta-results')
      this.expectedUserName= page.locator(".user__name [type='text']")
      this.placeorder= page.locator(".action__submit")
     this.sucessmessage= page.locator(".hero-primary")
     this.orderIDtoFectch= page.locator(".em-spacer-1 .ng-star-inserted")
     this.Orderslink= page.locator("button[routerlink*='myorders']")
     this.OderTable=page.locator('tbody')
    }

     async fillthedetailsforCheckout(userEmail){

    await this.countrytextField.pressSequentially('indo',{delay:350})
    const countryDrop= await this.countryDropdown
    await countryDrop.waitFor({ state: 'visible' });
    let Contry_Count=await countryDrop.locator("button").count()

    for(let i=0;i< Contry_Count;++i){
          //await page.pause()
          const countrytext=await countryDrop.locator("button").nth(i).textContent();
    
          if(countrytext.trim() ==="Indonesia"){
             console.log(countrytext.trim())
            await countryDrop.locator("button").nth(i).click();
             
             break;
    
          }
         
        }
        await this.page.locator("body").click();
    
        
           await expect(this.expectedUserName.first()).toHaveText(userEmail);
 }

           


async navigatetoOderdetails(){
await this.placeorder.scrollIntoViewIfNeeded();
    await this.placeorder.click();
}

// async fecththeOrderDetailsAndNavigatetoOrders(){

//     await expect(this.sucessmessage).toHaveText(" Thankyou for the order. ");
//      const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
//    await this.Orderslink.click();
//       await this.OderTable.waitFor({state:'visible'});
//       return orderId;
// }


}

module.exports={CheckOutpage};


