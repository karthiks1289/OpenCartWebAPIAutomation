/*
    * We never create classes in spec file.
    * If there is no class then no inheritance
    * {page} : Page Object of the browser window which is coming from the browser. It is an inbuilt fixture.
*/

import {Page, test, expect} from '@playwright/test';
import {LoginPage} from '../src/pages/LoginPage';
import process from "node:process";
import * as allure from 'allure-js-commons'


let loginPage : LoginPage;

//Hooks. Executes before execution of every test
test.beforeEach(async({page})=>{
    loginPage = new LoginPage(page);
    allure.step("Login",async()=>{
    await loginPage.goToLoginPage();
    })
})

test('verify login page title', async()=>{
    await allure.suite("Login Page")
    console.log(await loginPage.getLoginPageTitle());
    expect(await loginPage.getLoginPageTitle()).toBe('Account Login');
})

test('verify forget password link presence', async()=>{

    expect(await loginPage.isForgottenPasswordExist()).toBeTruthy();
})

test("App user credentials", async({page})=>{
    await loginPage.doLogin(process.env.userID, process.env.passWord);
    let testName = "User Account Page"
    await loginPage.takeScreenshot(testName)
    await test.info().attach('Login Screenshot', {
        path: `reports/screenshot/${testName}.png`,
        contentType: 'image/png'
    });
    await expect(page).toHaveURL("https://naveenautomationlabs.com/opencart/index.php?route=account/account")
})


