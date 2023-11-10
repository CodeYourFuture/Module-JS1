let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", "")); // converts to number takes the  string quato
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//Number is a function.  replaceAll is a method

// b) Identify all the lines that are variable reassignment statements
//carPrice = Number(carPrice.replaceAll(",", "")); // converts to number takes the  string quato
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
//the values of the variables carPrice and priceAfterOneYear has bee changed with removing commas and converting them to numbers

// c) Identify all the lines that are variable declarations
//let keyword is used to declare two variables, carPrice and priceAfterOneYear, and initialize them with string values.

// d) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//replaceAll turns  into an empty character with .replaceAll, and it turns into a number with number
