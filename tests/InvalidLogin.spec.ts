import {test} from "../src/fixtures/pagefixtures"
import {CsvHelper} from "../src/utils/CsvHelper"
import path from 'path'

const filePath = path.join(
  process.cwd(),
  'testdata',
  'logindata.csv'
);


test.beforeEach("launch application",async({logingPage})=>{
   await logingPage.goToLoginPage();
})

let data = CsvHelper.readTestData(filePath)
for(let record of data)
{
test(`Invalid Login Check ${record.username},${record.password}`, async({logingPage})=>{
    console.log(record.username, record.password);
    await logingPage.doLogin(record.username,record.password)
})
}