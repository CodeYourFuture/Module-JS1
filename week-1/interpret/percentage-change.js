let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

    // 3 functions, 4-5-10

// b) Identify all the lines that are variable reassignment statements

    // 4-5

// c) Identify all the lines that are variable declarations

    // 1-2-7-8

// d) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

    // it takes the carPrice string and replaces all "'" with "" so it gives us only number characters as a string, then with Number function string becomes integer
