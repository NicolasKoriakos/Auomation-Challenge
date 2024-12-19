import { expect, Page } from "@playwright/test";

export default class AllProductsPage {
  page: Page;

  originalVal:string=""
  constructor(page: Page) {
    this.page = page;
  }

  async clickElement(element: string){
    await this.page.locator(element).click();
  }

  async sendKeys(keys: string, element: string){
    await this.page.locator(element).fill(keys);
  }

  async hoverFirstElement(position: string, element2: string, element3: string){
    
    await this.page.locator(element2).nth(parseInt(position, 10)).hover();
    if (parseInt(position, 10)===0){
      await this.page.locator(element3).nth(parseInt(position, 10)).click()
    } else {
      await this.page.locator('a[data-product-id="2"].add-to-cart').nth(0).click()
    }
    
  }
}