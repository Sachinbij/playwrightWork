const { Cartpage } = require("./Cartpage");
const { CheckOutpage } = require("./CheckOutpage");
const { Dashboardpage } = require("./Dashboardpage");
const { OrderHistorypage } = require("./OrderHistorypage");
const{loginpage}=require('./loginPage');

class POMObjectManager{


constructor(page){
   this.page=page;
    this.login=new loginpage(this.page)
    this.dashboard=new Dashboardpage(this.page)
    this.checkOut=new CheckOutpage(this.page)
    this.cart=new Cartpage(this.page)
    this.orderhistory=new OrderHistorypage(this.page)

}

getLoginPage(){
    return this.login;
}

getDashboardPage(){
    return this.dashboard;
}

getCheckOutPage(){
    return this.checkOut;
}
getCartPage(){
    return this.cart;
}

getOrderHistoryPage(){
    return this.orderhistory;
}

}

module.exports={POMObjectManager};