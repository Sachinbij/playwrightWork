const{test,expect}=require('@playwright/test');



test('Logina and Handle the all =COntext', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/client')
    await page.locator("#userEmail").fill('anshika@gmail.com');
    await page.locator("#userPassword").type("Iamking@000");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle')
    // insted of line 11 we can use waitfor to wait for first or last matching elelemt
    await page.locator('.card-body b').first().waitFor() 

    var allTitles=await page .locator('.card-body b').allTextContents()
    console.log(allTitles)
    
// added the comments to run the 



});