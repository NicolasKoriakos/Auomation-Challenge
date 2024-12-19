import { expect, Page } from "@playwright/test";

export default class HomePage {
  page: Page;

  originalVal:string=""
  constructor(page: Page) {
    this.page = page;
  }

  async clickElement(element: string){
    await this.page.locator(element).click();
  }
}