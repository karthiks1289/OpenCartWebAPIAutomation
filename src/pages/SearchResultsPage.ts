import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SearchResultsPage extends BasePage
{
    private readonly searchResults : Locator; //locator("#content .row .product-layout")
    //private readonly productLink : Locator; //locator("#content h4").getByRole("link",{name:"MacBook", exact:true})
    
    constructor(page : Page)
    {
        super(page);
        this.searchResults = page.locator("#content .row .product-layout");
        //this.productLink = this.page.locator("#content h4").getByRole("link",{name:"MacBook", exact:true});
    }

    public async getProductCount() : Promise<number>
    {
        return await this.searchResults.count();
    }

   public async selectProduct(productName : string) : Promise<void>
    {
        
      await this.page.locator("#content h4").getByRole("link",{name:productName, exact:true}).click();
    }
    
}