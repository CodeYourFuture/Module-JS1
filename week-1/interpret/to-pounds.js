const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1 // takes out the p with -1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); // padStarts add a zero infront of the number
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2 // last two numbers ignored  we have 03
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
//This method is used to pad a string with a specified character at the beginning until it reaches a certain length. While doing this, the original string remains unchanged; a new string is returned.The first parameter of the padStart method specifies the target length, and the second parameter specifies the character to be added during the padding.

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step
// You should use MDN to look up substring, padStart and padEnd to interpret this program

// To begin, we can start with

// 1. const penceString = "399p": initialises a string variable with the value "399p"
