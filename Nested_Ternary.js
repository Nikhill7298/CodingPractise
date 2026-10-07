let temp = -1;

let feelslike = temp >=40 ? "Too Hot":
temp >=30 ? "Hot":
temp >=20 ? "Warm":
temp >=10 ? "Cool":
temp >=0 ? "Cold":"Freezing"; 

console.log(`Temperature is : ${temp} | Feels like: ${feelslike}`);
