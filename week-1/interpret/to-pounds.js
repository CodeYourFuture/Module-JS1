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
// 3. const penceStringWithoutTrailingP: initialises a string variable
// 3-6. penceString.substring(0, penceString.length - 1): Returns a string using the
// data from penceString, but without the pence symbol.
// 8. initialises a string variable called paddedPenceNumberString, based on penceStringWithoutTrailingP,
// forcing 3 characters filling with 0 from the left if necessary.
// 9-12. initialises a string variable named 'pounds' with the value of the paddedPenceNumberString minus
// the last 2 characters using substring method.
// 14-16 initialises a string variable named 'pence' with the value of the last 2 characters from
// paddedPenceNumberString, forcing 2 characters and filling with 0 from right side if necessary,
// combining the methods substring and padEnd.
// 18. prints to the console the values of 'pounds' and 'pence' with a dot between them and adding the
// pound symbol at the beginning.