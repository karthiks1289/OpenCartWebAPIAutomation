let actProductInfo = new Map<string,string>();
let result = ['Brand: Apple\nProduct Code: Product 14\nAvailability: Out Of Stock',
  '$122.00\nEx Tax: $100.00']
let strArray = result[0].split("\n");
console.log(strArray);
for(let value of strArray)
{
    let smx = value.split(":");
    actProductInfo.set(smx[0], smx[1].trim());
}
console.log(actProductInfo);