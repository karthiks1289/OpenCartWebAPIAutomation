import * as fs from 'fs';
import { json } from 'stream/consumers';

class JsonHelper
{
    public static readTestData(filePath:string)
    {
        //Print File Path
        console.log("Actual File Path : "+filePath)
        
        //Check File Exist
        if(!fs.existsSync(filePath))
            {
                throw new Error(`File Not Found : ${filePath}`);
            }
            
        //Read Raw Content
        const rawData = fs.readFileSync(filePath,"utf-8")
        
        //Converts Json String to Java Script Object or Array
        return JSON.parse(rawData) as  Record<string,string>[]
       
    }
}

//[ { productName: 'MAC' }, { productName: 'Apple' } ]
let result = JsonHelper.readTestData("C:\\Users\\karth\\Playwright_Framework\\testdata\\productDetails.json");
for(let obj of result)
{
    console.log(obj.productName);
}