import { expect, Page } from "@playwright/test";

export default class ViewProductPage {
  page: Page;

  originalVal:string=""
  constructor(page: Page) {
    this.page = page;
  }

  async clickElement(element: string){
    await this.page.locator(element).click();
  }

  async changeProductQuantity(element:string, quantity:string){
    this.page.locator(element).clear();
    this.page.locator(element).fill(quantity);
  }
}