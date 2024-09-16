let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// ...........there are 2 function calls: 1) carPrice.replaceAll and 2) priceAfterOneYear.replaceAll

// b) Identify all the lines that are variable reassignment statements
//.......1) carPrice = Number(carPrice.replaceAll(",", ""));  and 2)  priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// c) Identify all the lines that are variable declarations
//.....1. `let carPrice = "10,000";`    2. `let priceAfterOneYear = "8,543";`    3. `const priceDifference = carPrice - priceAfterOneYear;`   4. `const percentageChange = (priceDifference / carPrice) * 100;`

// d) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//..... it is replacing all the comas in the string so that we can have numbers that we can calculate.
