let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

//Answer:
/* (a)  There are two 3 functions call in the file.

        line 4:     carPrice = Number(carPrice.replaceAll(",", ""));
        line 5:     priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
        line 10:    console.log(`The percentage change is ${percentageChange}`);

    (b) I can't find error in the code.

    (c) The variable were reassigned on line 4 and line 5

    (d) Variables declarations occured in line 1, line 2, line 7 and line 8.

    (e) (i) The expression Number(carPrice.replaceAll(",","")): The .replace("," ,"") method was used remove the commas string while the Number() was used to modify or change the string by converting it to a numerical value.
        (ii) The purpose of the expression is to convert the the string into a numerical value so that it can used for mathematical calculations of the provided code.
*/