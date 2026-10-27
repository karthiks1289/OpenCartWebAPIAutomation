import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { parseArgs } from "node:util";

export class LoginPage extends BasePage {

    /**
     * 1. Declare Private and Readonly locators
     * 2. Create a Parameterized Constructor with page as parameter
     *      a. Pass this page argument to base class constructor to initialize the page.
     *      b. Initialize the Locators
     * 3. Public Actions or Methods of a page.
     */

    //1. Private and Readonly Locators
    private readonly emailID : Locator;
    private readonly password : Locator;
    private readonly loginBtn : Locator;
    private readonly forgottenPwd : Locator;
    private readonly loginError : Locator;
    private readonly registerLink : Locator;

    //2. Constructor of the page class : Initialize the locators
    constructor(page : Page)
    {
        super(page);
        this.emailID = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.password = page.getByLabel('Password');
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.forgottenPwd = page.getByRole('link', { name: 'Forgotten Password' }).first();
        this.loginError = page.locator('#account-login > div.alert.alert-danger:nth-of-type(1)');
        this.registerLink = page.getByRole('link', { name: 'Register' });
    }

    //3. public page actions(methods) / behavior : Encapsulation
    /**
     * public methods using private locators
     */
    async goToLoginPage() : Promise<void>{
        //Partial URL. Base URL we maintain in playwright.config.ts under use object.
        //baseURL
        await this.page.goto("opencart/index.php?route=account/login");
    }

    async getLoginPageTitle() : Promise<string>{
       return await this.page.title();
    }

    async doLogin(username : string, password:string) : Promise<void>
    {
        console.log(`user creds are ${username}-${password}`);
        await this.emailID.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }

    async isForgottenPasswordExist() : Promise<boolean>{
        return await this.forgottenPwd.isVisible();
    }

    async isInvalidLoginErrorDisplayed() : Promise<boolean>{
        return await this.loginError.isVisible();
    }

    async navToRegister() : Promise<void>
    {
        await this.registerLink.click();
    }
}