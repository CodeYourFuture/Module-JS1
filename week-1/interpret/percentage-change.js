let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// a answer) There are 3 function. Line 4, Line 7 and Line 10.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements
//c answer) line 4 and 5, this is where we reassign variable.

// d) Identify all the lines that are variable declarations
//d answer) there are 4 variable declaration line 1 ,2 , 7 and 8.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// e answer) This part of the expression uses the replaceAll() method on the carPrice string to remove all commas from the string.
// the purpose of this expression is to change string in to number.
