let carPrice = "10,000";
let priceAfterOneYear = "8,543";
carPrice = Number(carPrice.replace(/,/g, ""));
priceAfterOneYear = Number(priceAfterOneYear.replace(/,/g, ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);



// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// 2 functions are called in this code. `Number()` and `replaceAll()` each two times has have been called .

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//the error happens when the code runner encounter replaceAll() method . i tried different ways but it still doesn't work and 
// ChatGPT says my JS enviroment myabe doesn't support replaceAll() method so i changed with replace() and flag g to replace all 
// comma's with nothing


// c) Identify all the lines that are variable reassignment statements
// line 3 and 4 variables carPrice and priceAfterOneYear have been reassigned  . string type changes to number and removes comma.


// d) Identify all the lines that are variable declarations
//lines 1,2,6 and 7 variables are declared .

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//it changes string type of carPrice to number and before that remove all the comma's in the string with nothing , "";
