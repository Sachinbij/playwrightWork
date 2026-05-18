// @ts-check
import { defineConfig, devices, expect } from '@playwright/test';
import { trace } from 'node:console';
import { TIMEOUT } from 'node:dns';
import { report } from 'node:process';


const config =({
  testDir: './tests',
  TIMEOUT : 40*1000,
  expect : {
  
    TIMEOUT : 50*1000

  },
  
   reporter:'html',

  
  use: {
    browserName:'chromium',
    headless:false,
    screenshot:'off'
    //trace:'retain-on-failure'

  }

});

module.exports=config;

