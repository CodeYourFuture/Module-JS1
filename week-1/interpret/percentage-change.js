let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Ans. 4 calls in line 4 and 5 

// b) Identify all the lines that are variable reassignment statements
// Ans. Line 4 and 5

// c) Identify all the lines that are variable declarations
// Ans. Line 1,2,7 and 8

// d) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// Ans. It is converting the string into a number and removing the comma from string before converting to number
