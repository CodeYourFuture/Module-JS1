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
/ carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

//a) There are no function calls in this file.
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
//c
const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

//d
The expression Number(carPrice.replaceAll(",",""))
 is converting the string carPrice to a number. The replaceAll(",", "") method
  is used to remove all the commas from the string. 
  This is necessary because the carPrice 
  and priceAfterOneYear variables are 
  stored as strings with commas. 
  By removing the commas, the string can be converted
   to a number using the Number() function.