import {expect, test} from "../src/fixtures/pagefixtures"


test.beforeEach("Launch Application", async({logingPage})=>{
    await logingPage.goToLoginPage();
})

test("verify Register Page", async({logingPage, registerPage})=>{

    await logingPage.navToRegister();
    expect(await registerPage.checkRegisterPage()).toBe(0);
})