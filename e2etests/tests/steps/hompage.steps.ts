import { HomePageUtils } from './../utils/hompage.utils';
import { When, Then, setDefaultTimeout, Given } from '@cucumber/cucumber';
import { getPage } from "../../corelib/corelib.spec";
import HomePage from '../pages/hompage';
import { expect } from 'playwright/test';

let homePage:HomePage;

setDefaultTimeout(10000 * 100);

Given ("I click on {string} element in homepage", async function (element) {
    homePage = new HomePage(getPage());
    await homePage.clickElement(HomePageUtils.getElement(element)); 
});  

Given ("Verify user is navigated to ALL PRODUCTS page successfully", async function(){
    await expect(getPage()).toHaveURL("https://automationexercise.com/products");
})


Given ("Verify that home page is visible successfully", async function(){
    await expect(getPage()).toHaveURL("https://automationexercise.com/");
})

Given("Verify product detail is opened",async function(){
    await expect(getPage()).toHaveURL("https://automationexercise.com/product_details/1");
})