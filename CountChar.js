// const SStr = "Nikhil";
// let reverse = "";

// for (let i = SStr.length - 1; i >= 0; i--) {
//   reverse += SStr[i];
// }

// console.log(reverse); 

const number = 10

function result(number) {
  return [number].map(x => x== 10 ? x - 2 : x);
}


console.log(result(number));

