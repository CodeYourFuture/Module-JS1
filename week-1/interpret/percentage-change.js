let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// function calls and lines where they are called are:
// Number(carPrice.replaceAll()) and similarly in Line 5. Number() is a function while .replaceAll() is a method.
// The second function is console.log() called in Line 10

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The code runs without error and produce a correct answer expected.

// c) Identify all the lines that are variable reassignment statements
// Lines 4 and 5 are variable reassignment statements

// d) Identify all the lines that are variable declarations
// Lines 1, 2, 7 and 8 are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The expression remove commas (using .replaceAll()) and then convert the string values to integer using the function, Number()
// The purpose was to ensure the calculations can be effected. Mathematical operators (e.g '*, -, /') do not work with strings or provide undesirable results
