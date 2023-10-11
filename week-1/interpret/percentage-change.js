let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//--> there are 3 functions in line 4,5 and 10

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
Error is in line 4 because replaceAll is not a function of javascript. It can be fixed by replacing " ReplaceAll" to "replace", which is javascript function.

// c) Identify all the lines that are variable reassignment statements
//line 4 ,line 5 

// d) Identify all the lines that are variable declarations
//line 1 ,line 2 , line 7, line 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

//The expression Number(carPrice.replaceAll(",", "")) is used to convert a string like "10,000" with commas as a thousands separator into a numeric value (number) like 10000, so that you can perform mathematical operations on it. It removes the commas and ensures the value is treated as a number in JavaScript.

