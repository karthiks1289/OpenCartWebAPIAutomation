import {test} from "@playwright/test"

test("Listener", async({page})=>
    {
    await page.route("**/*", async(route)=>
        {
           const request = route.request();

        if (
            request.resourceType() === "xhr" ||
            request.resourceType() === "fetch"
        ) {
            console.log("API URL:", request.url());
            console.log("Method:", request.method());
        }

        await route.continue();
        })
    await page.goto("https://www.shapemyinterview.com/login")
    })





    