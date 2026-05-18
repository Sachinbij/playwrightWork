# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: optimiseEndUsingSplLoc.spec.js >> Placing the order
- Location: tests\optimiseEndUsingSplLoc.spec.js:4:2

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.action__submit')
    - locator resolved to <a _ngcontent-pll-c35="" class="btnn action__submit ng-star-inserted">…</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="ta-backdrop" _ngcontent-pll-c32=""></div> from <div _ngcontent-pll-c35="" class="user__address">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="ta-backdrop" _ngcontent-pll-c32=""></div> from <div _ngcontent-pll-c35="" class="user__address">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    40 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="ta-backdrop" _ngcontent-pll-c32=""></div> from <div _ngcontent-pll-c35="" class="user__address">…</div> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [ref=e25]: 
          - text: Sign Out
  - generic [ref=e28]:
    - generic [ref=e32]:
      - generic [ref=e33]: ZARA COAT 3
      - generic [ref=e34]: $ 11500
      - generic [ref=e35]: "Quantity: 1"
      - list [ref=e37]:
        - listitem [ref=e38]: Apple phone
    - generic [ref=e41]:
      - generic [ref=e42]: Payment Method
      - generic [ref=e43]:
        - generic [ref=e44] [cursor=pointer]: Credit Card
        - generic [ref=e45] [cursor=pointer]: Paypal
        - generic [ref=e46] [cursor=pointer]: SEPA
        - generic [ref=e47] [cursor=pointer]: Invoice
      - generic [ref=e48]:
        - generic [ref=e49]:
          - generic [ref=e50]: Personal Information
          - generic [ref=e52]:
            - generic [ref=e54]:
              - generic [ref=e55]: Credit Card Number
              - textbox [ref=e56]: 4542 9931 9292 2293
            - generic [ref=e57]:
              - generic [ref=e58]:
                - generic [ref=e59]: Expiry Date
                - combobox [ref=e60]:
                  - option "01" [selected]
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                - combobox [ref=e61]:
                  - option "01"
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                  - option "13"
                  - option "14"
                  - option "15"
                  - option "16" [selected]
                  - option "17"
                  - option "18"
                  - option "19"
                  - option "20"
                  - option "21"
                  - option "22"
                  - option "23"
                  - option "24"
                  - option "25"
                  - option "26"
                  - option "27"
                  - option "28"
                  - option "29"
                  - option "30"
                  - option "31"
              - generic [ref=e62]:
                - generic [ref=e63]: CVV Code ?
                - textbox [ref=e64]
            - generic [ref=e66]:
              - generic [ref=e67]: Name on Card
              - textbox [ref=e68]
            - generic [ref=e69]:
              - generic [ref=e70]:
                - generic [ref=e71]: Apply Coupon
                - textbox [ref=e72]
              - button "Apply Coupon" [ref=e75] [cursor=pointer]
        - generic [ref=e76]:
          - generic [ref=e77]: Shipping Information
          - generic [ref=e79]:
            - generic [ref=e80]: sachinbijawad97@gmail.com
            - textbox [ref=e81]: sachinbijawad97@gmail.com
            - generic [ref=e83]:
              - textbox "Select Country" [ref=e84]: India
              - generic [ref=e85]:
                - button " British Indian Ocean Territory" [ref=e87] [cursor=pointer]:
                  - generic [ref=e88]:
                    - generic [ref=e89]: 
                    - text: British Indian Ocean Territory
                - button " India" [ref=e90] [cursor=pointer]:
                  - generic [ref=e91]:
                    - generic [ref=e92]: 
                    - text: India
                - button " Indonesia" [ref=e93] [cursor=pointer]:
                  - generic [ref=e94]:
                    - generic [ref=e95]: 
                    - text: Indonesia
            - generic [ref=e97] [cursor=pointer]: Place Order
```

# Test source

```ts
  1  |  const{test, expect}=require('@playwright/test');
  2  | const { count, clear } = require('node:console');
  3  | 
  4  |  test('Placing the order',async({page})=>{
  5  |     const productname='ZARA COAT 3'
  6  |     const email='sachinbijawad97@gmail.com'
  7  |   await page.goto('https://rahulshettyacademy.com/client')
  8  |     await page.getByPlaceholder('email@example.com').fill('sachinbijawad97@gmail.com');
  9  |     await page.getByPlaceholder('enter your passsword').type("Test@2197");
  10 |     await page.getByRole('button',{name:'Login'}).click(); 
  11 |     //await page.waitForLoadState('networkidle')
  12 |     // OR 
  13 |     await page.locator('.card-body').first().waitFor()
  14 |     await page.locator('.card-body').filter({hasText:productname}).getByRole('button',{name:' Add To Cart'}).click()
  15 |     await page.getByRole('listitem').getByRole('button',{name:'Cart'}).click()
  16 |     
  17 |     let bool=await page.locator('h3:has-text("ZARA COAT 3")').isVisible();
  18 |       expect(bool).toBeTruthy()
  19 |     await page.getByRole('button',{name:'Checkout'}).click()
  20 |     await page .getByPlaceholder('Select Country').pressSequentially('ind',{delay:350})
  21 |      await page.getByRole("button",{name :"India"}).nth(1).click();
  22 |     await page.locator("body").click();
  23 | 
  24 |     
  25 |        await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
  26 |        await page.locator(".action__submit").scrollIntoViewIfNeeded();
> 27 | await page.locator(".action__submit").click();
     |                                       ^ Error: locator.click: Test timeout of 30000ms exceeded.
  28 | 
  29 |         //await page.locator('button:has-text("Place Order ")').click();
  30 |    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  31 |    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  32 |    console.log(orderId);
  33 |       await page.locator("button[routerlink*='myorders']").click();
  34 |       await page.locator('tbody').waitFor({state:'visible'});
  35 |       const row=await page.locator('tbody tr')
  36 | //await page.pause()
  37 |       for(let i=0;i<await row.count();++i){
  38 |          const orderiDColumn=await row.nth(i).locator('th').textContent()
  39 |          if(orderId.includes(orderiDColumn)){
  40 |             await row.nth(i).locator('button').first().click()
  41 |             break;
  42 |          }
  43 | 
  44 |       }
  45 |        const orderIdDetails = await page.locator(".col-text").textContent();
  46 |    expect(orderId.includes(orderIdDetails)).toBeTruthy();
  47 |     
  48 | 
  49 | 
  50 | 
  51 |  });
```