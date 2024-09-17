let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Identify all the lines that are variable reassignment statements

// c) Identify all the lines that are variable declarations

// d) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// Answers:

// a) There are 2 function calls, one in line 4 and the other one in line 5

// b) Reassignment statements are identified in lines: 4 and 5

// c) Variable declarations are identified in lines: 1 , 2 , 7 , and 8

// d) The expression converts the string including numbers and commas to numeric data type; firstly by removing the commas.
