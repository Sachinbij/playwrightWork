// @ts-check
import { defineConfig, devices, expect } from '@playwright/test';
import { worker } from 'node:cluster';
import { trace } from 'node:console';
import { TIMEOUT } from 'node:dns';
import { report } from 'node:process';


const config =({
  testDir: './tests',
  TIMEOUT : 40*1000,
  retries:1,
  worker:3,
  expect : {
  
    TIMEOUT : 50*1000

  },
  
   reporter:'html',

   projects:[
     {
    name:'safari execution',
    use:{
         browserName:'webkit',
         headless:false,
         screenshot:'off',
         ...devices['iPhone 11 Pro']
        }
      },

      {
    name :'chrome',
  
      use: {
    browserName:'chromium',
    headless:false,
    screenshot:'only-on-failure',
    trace:'retain-on-failure',
    //video:'retain-on-failure',
    //viewport:{width:720,height:720}  
    //...devices['Galaxy Note 3']


  
         }
  }
   ]
  
  

});

module.exports=config;

