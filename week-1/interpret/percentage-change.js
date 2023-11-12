let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", "")); // converts to number takes the  string quato
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

/* a) How many function calls are there in this file? Write down all the lines where a function call is made
    Number is a function.  replaceAll is a method

    how many function calls would you say are in this file?
    carPrice.replaceAll(",", ""): This function call is used to replace commas in the string representation of carPrice with an empty string.

    priceAfterOneYear.replaceAll(",", ""): This function call is used to replace commas in the string representation of priceAfterOneYear with an empty string.*/

/* b) Identify all the lines that are variable reassignment statements
    carPrice = Number(carPrice.replaceAll(",", "")); // converts to number takes the  string quato
    priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
    the values of the variables carPrice and priceAfterOneYear has bee changed with removing commas and converting them to numbers */

/* c) Identify all the lines that are variable declarations
    let keyword is used to declare two variables, carPrice and priceAfterOneYear, and initialize them with string values. 
    priceDifference and percentageChange, using the const keyword. The const keyword is used to create constants in JavaScript, meaning that the value of these variables cannot be reassigned once they are initially assigned. If we attempt to reassign a value to a variable declared with const, it will result in a syntax error.*/

/* d) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
    ReplaceAll turns  into an empty character with .replaceAll, and it turns into a number with number. */

// e) const keyword is used to declare constants. A constant is a variable whose value cannot be changed or reassigned after it has been initially assigned.  If you attempt to reassign a value to a variable declared with const, it will result in a syntax error.
