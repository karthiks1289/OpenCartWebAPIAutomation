import {APIRequest, test as baseTest, request} from "@playwright/test"
import { APIUtility } from "../api/APIUtility"

type apiInfo ={
    apiHelper : APIUtility
}

export const test = baseTest.extend<apiInfo>({

    apiHelper : async({request}, use)=>{

        let apiHelper = new APIUtility(request, process.env.API_Thinking_Tester_Base_URL!);
        await use(apiHelper)
    
    }
});

export {expect} from "@playwright/test";

