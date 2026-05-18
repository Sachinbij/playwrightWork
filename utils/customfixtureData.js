const base=require('@playwright/test');

exports.customTest=base.test.extend({
 fixtureData: {
  unEmail:"sachinbijawad97@gmail.com",
  unPassword:"Test@2197",
  productName:"ZARA COAT 3"


}


}

    

)