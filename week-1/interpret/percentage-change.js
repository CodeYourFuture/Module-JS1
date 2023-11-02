let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

//There are two function calls: in line 4: carPrice.replaceAll(",", "") and in line 5: priceAfterOneYear.replaceAll(",", "")

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements
 
// carPrice = Number(carPrice.replaceAll(" ", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(" ", ""));
// const priceDifference = carPrice - priceAfterOneYear;
// const percentageChange = (priceDifference / carPrice) * 100;

// d) Identify all the lines that are variable declarations

// let carPrice = "10,000";
// let priceAfterOneYear = "8,543";

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// Number(carPrice.replaceAll(",", "")) is used to convert the string carPrice, which is in the format "10,000" with a comma, into a numerical value. 
// The replaceAll method is used to remove any commas in the string, and then Number is used to convert the cleaned string into a numeric value. In this case, it converts the string "10,000" to the number 10000. 
