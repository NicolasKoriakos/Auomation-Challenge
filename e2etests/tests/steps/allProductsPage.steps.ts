import { When, Then, setDefaultTimeout, Given } from '@cucumber/cucumber';
import { getPage } from "../../corelib/corelib.spec";
import HomePage from '../pages/hompage';
import { allProductsPageUtils } from '../utils/allProductsPage.utils';
import AllProductsPage from '../pages/allProductsPage';
import { expect } from 'playwright/test';

let allProductsPage:AllProductsPage;

setDefaultTimeout(10000 * 100);

Given ("I click on {string} element in allProductsPage", async function (element) {
    allProductsPage = new AllProductsPage(getPage());
    await allProductsPage.clickElement(allProductsPageUtils.getElement(element)); 
});  

Given ("I send {string} to {string} element in allProductsPage", async function (searchElement, element) {
    allProductsPage = new AllProductsPage(getPage());
    await allProductsPage.sendKeys(searchElement,allProductsPageUtils.getElement("search-product"));
});  

Given ("Hover over {string} {string} element and click {string} element",async function(element, element2, element3){
    allProductsPage = new AllProductsPage(getPage());
    await allProductsPage.hoverFirstElement(allProductsPageUtils.getElement(element), allProductsPageUtils.getElement(element2), allProductsPageUtils.getElement(element3));
})

Then ("I validate search products is visible in allProductsPage", async function () {  
    const isVisible = await getPage().locator(allProductsPageUtils.getElement("search-product")).isVisible();
    expect(isVisible).toBeTruthy();
});  

Then("Verify all the products related to search are visible", async function(){
    const elements = getPage().locator('.productinfo.text-center');
    const count = await elements.count();

    for (let i = 0; i < count; i++) {
        const element = elements.nth(i); 
        await expect(element).toBeVisible(); 
        const text = await element.innerText();
        expect(text).toContain('Jean'); }})

Then("Verify products in cart and data",async function(){
    const text1 = await getPage().locator("id=product-1").innerText();
    const text2 = await getPage().locator("id=product-2").innerText();

    expect(text1).toContain("Rs. 500");
    expect(text1).toContain("Blue Top");
    expect(text1).toContain("Women > Tops");
    expect(text2).toContain("Rs. 400");
    expect(text2).toContain("Men > Tshirts");
    expect(text2).toContain("Men Tshirt");
})


