 const{expect}=require('@playwright/test');
 const{POMObjectManager}=require('../Pages/POMObjectManager');
  const {customTest}=require('../utils/customfixtureData')

 customTest('Placing the order',async({page,fixtureData})=>{
    const pageOBJ=new POMObjectManager(page)
   //const productname='ZARA COAT 3'
   //  const email='sachinbijawad97@gmail.com'
   //  const password='Test@2197';
    const looginpage =pageOBJ.getLoginPage();
  await looginpage.gotoUrl()
  console.log(fixtureData.unEmail);
 await looginpage.logintoApplication(fixtureData.unEmail,fixtureData.unPassword)
 const dashboard=pageOBJ.getDashboardPage()
 await dashboard.SearchProductAndAddtoTheCart(fixtureData.productName)
 await dashboard.navigateToCart()

    const cart=pageOBJ.getCartPage()
    await cart.verifytheProduct()
    await cart.navigatetoCheckout()

    // const checkOut=pageOBJ.getCheckOutPage()
    // await checkOut.fillthedetailsforCheckout(dataset.unEmail)
    // await checkOut.navigatetoOderdetails()
    // const orderHistory=pageOBJ.getOrderHistoryPage()
    // await orderHistory.oderSummerry()
    
    



 });