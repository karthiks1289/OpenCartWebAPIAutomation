import {test as baseTest} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import {SearchResultsPage} from "../pages/SearchResultsPage"
import { HomePage } from "../pages/HomePage"
import { ProductInfoPage } from "../pages/ProductInfoPage"
import { BasePage } from "../pages/BasePage"

type fixtures = {

    logingPage : LoginPage;
    homePage : HomePage;
    registerPage : RegisterPage
    searchResultsPage : SearchResultsPage
    productInfoPage : ProductInfoPage
    basePage : BasePage

}

export const test = baseTest.extend<fixtures>(
    {
        basePage : async({page}, use)=>{
            let basePage = new BasePage(page);
            use(basePage)
        },
       
        logingPage :  async ({page}, use)=>{
            let loginPage = new LoginPage(page);
            use(loginPage)
        },

        registerPage : async ({page}, use)=>{
            let registerPage = new RegisterPage(page);
            use(registerPage)
        },

        searchResultsPage : async({page}, use)=>{
            let searchResultPage = new SearchResultsPage(page);
            use(searchResultPage)
        },

        homePage : async({page}, use)=>{
            let homePage = new HomePage(page)
            use(homePage)
        },

        productInfoPage : async({page}, use)=>{
            let productInfoPage = new ProductInfoPage(page);
            use(productInfoPage)
        }
    }
)

export {expect} from "@playwright/test"