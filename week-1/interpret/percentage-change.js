let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

//ans; in total four
//2 calls to Number();
//2 calls to replaceAll();

// b) Identify all the lines that are variable reassignment statements

//ans; there are 2 line 4, 5.  ` carPrice `, `priceAfterOneYear `.

// c) Identify all the lines that are variable declarations

//ans; line 1, 2, 7, 8

// d) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// ans; It will replace the value of carPrice. Which means it will bring the number without comma. 