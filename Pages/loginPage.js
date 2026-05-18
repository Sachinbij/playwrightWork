class loginpage{

    constructor(page){
        this.page=page;
     this.siginButton= page.locator("[value='Login']");
      this.userEmail=page.locator("#userEmail")
     this.password= page.locator("#userPassword")

    }


   async gotoUrl(){
         await this.page.goto('https://rahulshettyacademy.com/client')
    }

   async logintoApplication(email,password){
    await this.userEmail.fill(email);
    await this.password.type(password);
    await this.siginButton.click(); 
    await this.page.waitForLoadState('networkidle')

    }
}

module.exports={loginpage};