import { When, Then, setDefaultTimeout, Given } from '@cucumber/cucumber';
import ViewProductPage from '../pages/viewProductPage';
import { getPage } from '../../corelib/corelib.spec';
import { ViewProductPageUtils } from '../utils/viewProductPage.utils';
import { expect } from 'playwright/test';

let viewProductPage:ViewProductPage;

setDefaultTimeout(10000 * 100);

When("I change product quantity to {string}",async function(quantity){
    viewProductPage = new ViewProductPage(getPage());
    viewProductPage.changeProductQuantity("id=quantity","4")
})

Given ("I click on {string} element in ViewProductPage", async function (element) {
    viewProductPage = new ViewProductPage(getPage());
    await viewProductPage.clickElement(ViewProductPageUtils.getElement(element)); 
})

Then ("Verify cart quantity",async function(){
    viewProductPage = new ViewProductPage(getPage());
    const quantity = await getPage().locator("xpath=//td[@class='cart_quantity']//button[@class='disabled']").innerText();
    expect(quantity).toContain("4");
})