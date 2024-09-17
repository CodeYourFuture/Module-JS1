const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step
// You should use MDN to look up substring, padStart and padEnd to interpret this program

// To begin, we can start with

// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1); 
//                                                : This line  creates a new string variable
//                                                  which represents the price in pence without the 'p' character.
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); 
//                                                 : This line creates a new string variable with the value "399," 
// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
//                                                 : This line takes the first character of the `paddedPenceNumberString`, 
//                                                  which represents the pounds.
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"); 
//                                         : This line extracts the pence part of the `paddedPenceNumberString`
// 6. console.log(`£${pounds}.${pence}`);
//                 : This line  combines the `pounds` and `pence` variables with the '£' symbol to to make it easy to read.



