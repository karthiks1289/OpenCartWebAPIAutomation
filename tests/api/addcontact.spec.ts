import process from "node:process";
import {expect, test} from "../../src/fixtures/apifixtures"

let userToken : string;

test.beforeEach("Add Contact Test", async({apiHelper})=>{

    let data = {
        firstName : `FN${Date.now()}`,
        lastName : `LN${Date.now()}`,
        email : `qa${Date.now()}@example.com`,
        password : 'Contact'
    }
   let response =  await apiHelper.post("/users", data, {Authorization : `Bearer ${process.API_Token_Thinking_Tester!}`});
   expect(response.status).toBe(201);
   userToken = response.body.token
})

test("Add Contact", async({apiHelper})=>{

    let data = {
    firstName: `John${Date.now()}`,
    lastName: `Doe${Date.now()}`,
    birthdate: "1970-01-01",
    email: `${Date.now()}jdoe@fake.com`,
    phone: "8005555555",
    street1: "1 Main St.",
    street2: "Apartment A",
    city: "Anytown",
    stateProvince: "KS",
    postalCode: "12345",
    country: "USA"
}
let response = await apiHelper.post("/contacts", data, {Authorization : `Bearer ${userToken}`})
console.log(response.status);

let contactResponse = await apiHelper.get('/contacts',{Authorization : `Bearer ${userToken}`})
})
