let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//    --> 5 function calls. 
//    --> Number
//    --> ReplceAll 
//    --> Number 
//    --> ReplaceAll
//    --> percentageChange
// b) Identify all the lines that are variable reassignment statements
//      --> carPrice = Number()
//     --> priceAfterOneYear = Number()
// c) Identify all the lines that are variable declarations
//       --> let carPrice = "10,000";
//       --> let priceAfterOneYear = "8,543";
//       --> const priceDifference = carPrice - priceAfterOneYear;
//       --> const percentageChange = (priceDifference / carPrice) * 100;
// d) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//      --> It replace all the commas to an empty string and the Number constructor is used to change the sting to numerical value
