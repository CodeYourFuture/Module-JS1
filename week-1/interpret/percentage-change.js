let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);


// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// 2 functions : 
// Number(carPrice.replaceAll(",", ""))
// Number(priceAfterOneYear.replaceAll(",", ""))

// b) Identify all the lines that are variable reassignment statements

// 3 variable reassignment statements : carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
// percentageChange = (priceDifference / carPrice) * 100;

// c) Identify all the lines that are variable declarations

// 4 variable declarations : let carPrice = "10,000";
// let priceAfterOneYear = "8,543";
// const priceDifference = carPrice - priceAfterOneYear;
// const percentageChange = (priceDifference / carPrice) * 100;

// d) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// Number(carPrice.replaceAll(",", "")) is converting the string carPrice to a number. The replaceAll(",", "") part of the expression is removing all of the commas from the carPrice string. 
// This is necessary because the Number() function cannot convert a string with commas to a number.
