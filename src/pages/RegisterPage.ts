import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegisterPage extends BasePage
{
    private readonly  firstName : Locator;
    private readonly  lastName : Locator;
    private readonly  email : Locator;
    private readonly  telephone : Locator;
    private readonly  password : Locator;
    private readonly  confirmPwd : Locator;
    private readonly  privacyPolicy : Locator;
    private readonly  continueBtn : Locator;
    private readonly  registerAccountHeader : Locator;

    constructor(page : Page)
    {
        super(page);
        this.firstName = page.getByRole('textbox', { name: '* First Name' });
        this.lastName = page.getByRole('textbox', { name: '* Last Name' });
        this.email = page.getByRole('textbox', { name: '* E-Mail' });
        this.telephone = page.getByRole('textbox', { name: '* Telephone' });
        this.password = page.getByLabel('* Password');
        this.confirmPwd = page.getByLabel('* Password Confirm');
        this.privacyPolicy = page.locator('#content > form.form-horizontal > div.buttons > div.pull-right > input:nth-of-type(1)');
        this.continueBtn = page.getByRole('button', { name: 'Continue' });
        this.registerAccountHeader = page.getByRole('heading', { name: 'Register Account', level: 1 });
    }

    public  async checkRegisterPage() : Promise<number>
    {
        return (await this.registerAccountHeader.innerText()).localeCompare("Register Account")
    }

    public async doRegister(firstName : string,lastName : string,email : string,telephone : string,password : string,confirmPwd : string) : Promise<void>
    {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName)
        await this.email.fill(email)
        await this.telephone.fill(telephone)
        await this.password.fill(password)
        await this.confirmPwd.fill(confirmPwd)
        await this.privacyPolicy.check();
        await this.continueBtn.click();
        
    }

}