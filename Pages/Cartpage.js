
 const{expect}=require('@playwright/test');
class Cartpage {

    constructor(page){
        this.page=page;

        this.addeproductName=  page.locator('h3:has-text("ZARA COAT 3")');
       this.checkOut= page .locator('button:has-text("Checkout")');
    }

    async verifytheProduct(){
        await this.page.waitForLoadState('networkidle')
        let bool=await this.addeproductName.isVisible();
              expect(bool).toBeTruthy()
    }
   async navigatetoCheckout(){
         await this.checkOut.click()
    }
}

module.exports={Cartpage};