import process from "node:process";
import { APIUtility } from "../../src/api/APIUtility";
import {expect, test} from "../../src/fixtures/apifixtures"

const apiToken = process.env.API_TOKEN!;
let header = {
    Authorization : `Bearer ${apiToken}`
}


test("create a user validation", async({apiHelper})=>{
   
   let responseBody = await createUser(apiHelper);
   const userID = responseBody.id;

   console.log(`/public/v2/users/${userID}`);
   let getResponse = await apiHelper.get(`/public/v2/users/${userID}`, header);
   expect(getResponse.status).toBe(200)
   expect(getResponse.body.id).toBe(userID);
})

test("Delete a User", async({apiHelper})=>{

   let responseBody = await createUser(apiHelper);
   const userID = responseBody.id;

   console.log(`/public/v2/users/${userID}`);
   let getResponse = await apiHelper.get(`/public/v2/users/${userID}`, header);
   expect(getResponse.status).toBe(200)
   expect(getResponse.body.id).toBe(userID);

   let userInfo = await apiHelper.delete(`/public/v2/users/${userID}`, header)
   expect(userInfo.status).toBe(204)

   let getResponseInfo = await apiHelper.get(`/public/v2/users/${userID}`, header);
   expect(getResponseInfo.status).toBe(404)
   expect(getResponseInfo.body.message).toBe("Resource not found");
})

async function createUser(apiHelper : APIUtility) : Promise<any>{

    let userData = { name: `QA ${Date.now()}`, email: `qa+${Date.now()}@example.com`, gender: "male", status: "active" }
    let response = await apiHelper.post("/public/v2/users", userData, header);
    expect(response.status).toBe(201)
    return await response.body;
}