import {APIResponse, expect, request, test} from "@playwright/test"

let baseURL = "https://gorest.co.in"
let token = "4f044d067a4650262d145acd42c27a21a5e4f9b7ed835892f222f662bae2d6d8"
let header = {
    Authorization : `Bearer ${token}`
}

test("Get User Info", async({request})=>{

  let response : APIResponse = await request.get(`${baseURL}/public/v2/users`, {headers:header})
  console.log(await response.status());
  console.log(await response.statusText());
  console.log(await response.json());
})

let userData ={
    name : "QATESTER",
    email : `QATEST${Date.now()}@invalid.com`,
    gender : "male",
    status : "active"
}
test("Create Record", async({request})=>{

    let response:APIResponse  = await request.post(`${baseURL}/public/v2/users`, {headers : header, data:userData});
    console.log(response.status());
    console.log(response.statusText());

})


let userID = "8671054"
let objDetails =
{
    name : "RAMCO",
    status : "Inactive"
    
}
test("Update User Info", async({request})=>{
   console.log(`${baseURL}/public/v2/users/${userID}`);
   let response = await request.put(`${baseURL}/public/v2/users/${userID}`, {headers: header,data : objDetails})
   console.log(await response.json());
   console.log(await response.status());
   console.log(await response.statusText());
   
})

