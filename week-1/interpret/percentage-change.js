let carPrice = "10,000";
console.log(carPrice);
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
console.log(carPrice);
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// 3 functions
// carPrice.replaceAll(); priceAfterOneYear.replaceAll(); console.log()

// b) Identify all the lines that are variable reassignment statements
// carPrice = Number(carPrice.replaceAll(",", ""))
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// c) Identify all the lines that are variable declarations
// let carPrice = "10,000";
// let priceAfterOneYear = "8,543";
//const priceDifference = carPrice - priceAfterOneYear;
// const percentageChange = (priceDifference / carPrice) * 100;

// d) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// the expression is replacing the string "10,000" to the number 10000
