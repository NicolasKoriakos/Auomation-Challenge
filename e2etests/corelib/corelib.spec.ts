import { After, Before, Given, setDefaultTimeout, When } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "playwright";


setDefaultTimeout(10000)

let browser: Browser;
let browserContext: BrowserContext;
let page: Page;


Before( async function(){
  browser = await chromium.launch({ headless: false, channel: "chrome", args:['--start-maximized'] });
  browserContext = await browser.newContext({ viewport:null, javaScriptEnabled: true });
  page = await browserContext.newPage();
  await page.goto("https://automationexercise.com/")
})

After( async function(){
  browser.close();
  browserContext.close();
  page.close();
})

export function getPage():Page{
    return page;
}