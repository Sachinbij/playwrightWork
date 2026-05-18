  const {test,expect}=require('@playwright/test');

class OrderHistorypage{


    constructor(page){
     this.orderinHistory= page.locator(".em-spacer-1 .ng-star-inserted")
     this.myOrder= page.locator("button[routerlink*='myorders']")
     this.tableBody=page.locator('tbody')
    this.row=  page.locator('tbody tr')
    this.orderinTable= page.locator(".col-text")


    }

    async oderSummerry(){

        const orderId = await this.orderinHistory.textContent();
              console.log(orderId);
               await this.myOrder.click();
              await this.tableBody.waitFor({state:'visible'});
              const Tablerow=await this.row
        
              for(let i=0;i<await Tablerow.count();++i){
                 const orderiDColumn=await Tablerow.nth(i).locator('th').textContent()
                 if(orderId.includes(orderiDColumn)){
                    await Tablerow.nth(i).locator('button').first().click()
                    break;
                 }
        
              }
               const orderIdDetails = await this.orderinTable.textContent();
           expect(orderId.includes(orderIdDetails)).toBeTruthy();
    }
}

module.exports={OrderHistorypage};