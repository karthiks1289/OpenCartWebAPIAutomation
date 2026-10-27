import process from "node:process";
import {expect, test} from "../src/fixtures/pagefixtures"

test.beforeEach("login", async({logingPage})=>{

    await logingPage.goToLoginPage();
    await logingPage.doLogin(process.env.userID, process.env.passWord)
})

test("Validate Product Info", async({homePage, searchResultsPage,productInfoPage, page})=>{

    homePage.doSearch("mac");
    searchResultsPage.selectProduct("iMac");
    console.log(await productInfoPage.productHeaderCheck())
    expect.soft(await productInfoPage.productHeaderCheck()).toBe("iMac")
    
    let expProductInfo = new Map<string,string>();
    expProductInfo.set("Brand", "Apple")
    expProductInfo.set("Product Code", "Product 14")
    expProductInfo.set("Availability", "In Stock")

    console.log(await productInfoPage.getProductInfo());

    let actProductInfo = new Map<string,string>();
    let result = await productInfoPage.getProductInfo();
    let splitProductInfo = result[0].split("\n");

    for(let product of splitProductInfo)
    {
        let individualInfo = product.split(":");
        actProductInfo.set(individualInfo[0], individualInfo[1].trim());
    }

    expect.soft(expProductInfo.get("Brand")).toBe(actProductInfo.get("Brand"));
    expect.soft(expProductInfo.get("Product Code")).toBe(actProductInfo.get("Product Code"));
    expect.soft(expProductInfo.get("Availability")).toBe(actProductInfo.get("Availability"));
})