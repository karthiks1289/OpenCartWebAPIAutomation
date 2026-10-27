import {test} from "../src/fixtures/pagefixtures"
import {CsvHelper} from "../src/utils/CsvHelper"

test.beforeEach("launch application",async({logingPage})=>{
   await logingPage.goToLoginPage();
})

let data = CsvHelper.readTestData("C:\\Users\\karth\\Playwright_Framework\\testdata\\logindata.csv")
for(let record of data)
{
test(`Invalid Login Check ${record.username},${record.password}`, async({logingPage})=>{
    console.log(record.username, record.password);
    await logingPage.doLogin(record.username,record.password)
})
}