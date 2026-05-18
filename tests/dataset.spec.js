 const{test, expect}=require('@playwright/test');
 const{loginpage}=require('../Pages/loginPage');
 const{Dashboardpage}=require('../Pages/Dashboardpage');
 const{Cartpage}=require('../Pages/Cartpage');
 const{CheckOutpage}=require('../Pages/CheckOutpage');
 const {OrderHistorypage}=require('../Pages/OrderHistorypage')
 const{POMObjectManager}=require('../Pages/POMObjectManager');
   const dataset=JSON.parse(JSON.stringify(require('../utils/dataset.json')));

for(const data of dataset){
 test(`order for ${data.productName}`,async({page})=>{
    const pageOBJ=new POMObjectManager(page)
  // const productname='ZARA COAT 3'
   //  const email='sachinbijawad97@gmail.com'
   //  const password='Test@2197';
    const looginpage =pageOBJ.getLoginPage();
  await looginpage.gotoUrl()
  console.log(data.unEmail);
 await looginpage.logintoApplication(data.unEmail,data.unPassword)
 const dashboard=pageOBJ.getDashboardPage()
 await dashboard.SearchProductAndAddtoTheCart(data.productName)
 await dashboard.navigateToCart()

    const cart=pageOBJ.getCartPage()
    await cart.verifytheProduct()
    await cart.navigatetoCheckout()

    const checkOut=pageOBJ.getCheckOutPage()
    await checkOut.fillthedetailsforCheckout(dataset.unEmail)
    await checkOut.navigatetoOderdetails()
    const orderHistory=pageOBJ.getOrderHistoryPage()
    await orderHistory.oderSummerry()
    
    



 });

}