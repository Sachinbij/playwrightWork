class Dashboardpage{

    constructor(page){
         this. products= page.locator('.card-body')
         this. productText =  page.locator(".card-body b")
         this.cart= page.locator("[routerlink*='cart']")
    }


   async SearchProductAndAddtoTheCart(productname){

        //await this.products.first().waitFor()
      const titles = await this.productText.allTextContents();
   console.log(titles); 
   // const products= page.locator('.card-body')
    const productCount=await this.products.count()


    for(let i=0;i<productCount;++i){

        if(await this.products.nth(i).locator("b").textContent()===productname){
           await this.products.nth(i).locator("text= Add To Cart").click();
           break;
        }

        
        
        
    }
    }

   async navigateToCart(){

        await this.cart.click()
    }
}

module.exports={Dashboardpage}