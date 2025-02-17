const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

console.log(penceStringWithoutTrailingP);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

console.log(paddedPenceNumberString);

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

console.log(pounds);

const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");

  console.log(pence);

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step
// You should use MDN to look up substring, padStart and padEnd to interpret this program

// To begin, we can start with

// 1. const penceString = "399p": initialises a string variable with the value "399p"
// const penceStringWithoutTrailingP = penceString.substring( 0,penceString.length - 1);
// This line creates a new string (penceStringWithoutTrailingP) by using the substring method to extract a portion of penceString. 
// It takes characters from the beginning (index 0) up to the length of penceString - 1, effectively removing the trailing "p".
// Line 10 This line pads the penceStringWithoutTrailingP with leading zeros to ensure that it has at least three characters. The resulting string is stored in paddedPenceNumberString.
// Line 14 Extracts the pounds part from paddedPenceNumberString by taking characters from the beginning up to the length of paddedPenceNumberString - 2.
// Line 21 Extracts the last two characters (representing pence) from paddedPenceNumberString and then pads the result with trailing zeros using padEnd to ensure it has two characters.

// Line 25 Prints the final formatted string by combining pounds, a dot, and pence, with a pound sign (£) at the beginning.


