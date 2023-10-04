let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

/*
// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

There are three function calls in this code:

carPrice.replaceAll(",", "") on line 4
priceAfterOneYear.replaceAll(",", "") on line 5
Number() used twice on lines 4 and 5


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?



// c) Identify all the lines that are variable reassignment statements

The lines that are variable reassignment statements are:

carPrice = Number(carPrice.replaceAll(",", "")); on line 4
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", "")); on line 5

// d) Identify all the lines that are variable declarations

the lines that are variable declarations are:

let carPrice = "10,000"; on line 1
let priceAfterOneYear = "8,543"; on line 2
const priceDifference = carPrice - priceAfterOneYear; on line 6
const percentageChange = (priceDifference / carPrice) * 100; on line 7

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

The expression Number(carPrice.replaceAll(",", "")) is converting a string that represents a number with commas as a thousands separator (e.g., "10,000") into an actual JavaScript number. To do this, it first uses replaceAll to remove any commas from the string, and then it uses Number() to convert the resulting string into a numeric data type. The purpose of this expression is to ensure that carPrice and priceAfterOneYear are treated as numeric values rather than strings, so mathematical operations like subtraction and division can be performed on them.




