// Initialize two variables with strings representing car prices
let carPrice = "10,000";
let priceAfterOneYear = "8,543";
// Remove commas and convert the strings to numbers
carPrice = Number(carPrice.replace(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replace(",", ""));
// Calculate the price difference
const priceDifference = carPrice - priceAfterOneYear;
// Calculate the percentage change
const percentageChange = (priceDifference / carPrice) * 100;
// Display the result with a percentage sign % that i have added
console.log(`The percentage change is ${percentageChange}%`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// 'Answer' there are 2 function calls of the function Number()
/* 1 in this line carPrice = Number(carPrice.replaceAll(",", ""));
       1 in this line priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
    */
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// 'Answer' the error is on carPrice.replaceAll
/*
To make the code more widely compatible, you can replace replaceAll with replace.
The error encountering is likely related to the replaceAll method, which is not universally 
supported in all JavaScript environments, particularly in older browsers or environments 
that don't support ECMAScript 2021 (ES12).
*/
/* 1- in this line carPrice = Number(carPrice.replaceAll(",", "")); 
   this is occurring because of it's trying to call a function that is not supported in all JavaScript environments
   This replaceAll() as I understand the purpose of this is to remove the comma, so we use replace 
   method like this carPrice = Number(carPrice.replace(",", ""));To make the code more widely compatible
   2 in this line too priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
   i get the same error so as I understand the purpose of this line to remove the comma we use
   replace method like this priceAfterOneYear = Number(priceAfterOneYear.replace(",", ""));
*/
// c) Identify all the lines that are variable reassignment statements
// 'Answer' the variable reassignment statements are:
/*
   carPrice = Number(carPrice.replace(",", ""));
   priceAfterOneYear = Number(priceAfterOneYear.replace(",", ""));
*/

// d) Identify all the lines that are variable declarations
// 'Answer' variable declarations are as follows:
/*
  let carPrice = "10,000"; - This declares the variable carPrice 
  and initializes it with the string "10,000."
  let priceAfterOneYear = "8,543"; - This declares the variable priceAfterOneYear 
  and initializes it with the string "8,543."
  const priceDifference = carPrice - priceAfterOneYear; - This declares the constant variable priceDifference 
  and assigns it a value based on the calculation between carPrice and priceAfterOneYear.
  const percentageChange = (priceDifference / carPrice) * 100; - This declares the constant variable percentageChange 
  and assigns it a value based on the calculation involving priceDifference and carPrice.
*/

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// 'Answer'
/*
  it's trying to call a function that could invoke an error and it is likely related to the 
  replaceAll method, which is not universally supported in all JavaScript environments
  the purpose of this expression is to remove the comma and convert the string representation 
  of carPrice into numeric values suitable for mathematical operations.
*/
// note: "as I tested the replaceAll() method it works in another system without errors but in my system I get the error"
