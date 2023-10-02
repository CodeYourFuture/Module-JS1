let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replace(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replace(",", ""));


const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below     

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//On line 4, line 5, line 11

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// Error is in line 4 because replaceAll is not a function of javascript. It can be fixed by replacing " ReplaceAll" to "replace", which is javascript function.

// c) Identify all the lines that are variable reassignment statements
//line 4, line 5, 

// d) Identify all the lines that are variable declarations
// line 1, line 2, line 8, line 9

// e) Describe what the expression Number(carPrice.replace(",","")) is doing - what is the purpose of this expression?
//replace() is returning string free of commas, so it can be evaluated by Number().
//Number(argument 1, argument 2) convert the resulting string, which is now free of commas, into a numeric (number) data type. 
