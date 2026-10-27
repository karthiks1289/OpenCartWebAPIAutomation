import * as fs from 'fs';
import {parse} from "csv-parse/sync"
import path from 'path';

export class CsvHelper
{
    public static readTestData(filePath:string){

        
        //Print File Path
        console.log("Actual File Path : "+filePath)

        //Check File Exist
        if(!fs.existsSync(filePath))
        {
            throw new Error(`File Not Found : ${filePath}`);
        }

        //Read Raw File Content
        const fileContent = fs.readFileSync(filePath,"utf-8");

        //Parse CSV Content
       return parse(fileContent,{
            columns:true,
            skip_empty_lines:true,
            trim:true
        }) as Record<string,string>[]

    }
}