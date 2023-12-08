let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
There are four function 
line 1 line 2 , line  line 7 and line 8
// b) Identify all the lines that are variable reassignment statements
line 1 is carpeice line 2 is priceAfterOneYear , line 7 priceDifference line 8 priceDifference
// c) Identify all the lines that are variable declarations
var to 10000 , var  is "8553" , var 7 is carPrice -priceAfterOneYear and var 8 priceDifference / carPrice

// d) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
