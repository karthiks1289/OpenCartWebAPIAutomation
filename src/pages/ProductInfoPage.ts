import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductInfoPage extends BasePage
{
    private readonly productMetaData : Locator;

    constructor(page:Page)
    {
        super(page);
        this.productMetaData = page.locator("#content ul.list-unstyled");
    }
    
    async productHeaderCheck() : Promise<string> {
        
           return await this.page.locator("div#content .row .col-sm-4 h1").innerText();
    }

    async getProductInfo() : Promise<string[]>
    {
        return await this.productMetaData.allInnerTexts();
    }
}