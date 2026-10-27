import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

/**
 * Declare Locators
 * Create Constructor and Initialize Page and Locators
 * Create Features
 */

export class HomePage extends BasePage
{
    private readonly searchBox : Locator
    private readonly searchButton : Locator
    private readonly homeHeader : Locator

    constructor(page:Page)
    {
        super(page);
        this.searchBox = page.getByRole("textbox",{name:"Search"});
        this.searchButton = page.locator("#search").getByRole("button");
        this.homeHeader = page.locator('#content').getByRole('heading', { name: 'My Account', level:2 });
    }

    public async userHomePage() : Promise<boolean>
    {
        return await this.homeHeader.isVisible();
    }

    async doSearch(productName : string)
    {
        await this.searchBox.fill(productName)
        await this.searchButton.click();
    }
}