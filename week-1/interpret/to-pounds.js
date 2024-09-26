const penceString = "399p"; //initializes a string variable with the value "399p"

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);    // Initializes a new variable to remove the last character from the string

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); // Initializes a new variable to pad the whole number So that it can separate the pence from pounds
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
); // This variable to return just the pounds part of the given value which is taking off the last 2 digits from the number we have 

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");  // new variable using function calls to convert the last 2 digits into pence by padding them

console.log(`£${pounds}.${pence}`);   //Displaying the result with £ sign

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step
// You should use MDN to look up substring, padStart and padEnd to interpret this program

// To begin, we can start with

// 1. const penceString = "399p": initialises a string variable with the value "399p"
