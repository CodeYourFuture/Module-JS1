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
/* 

line 1 declares a string variable of total pence
line 3 declares a string of the numbers by substring from total pence string
line 8 declares a string of pound value with padstart with min 3 characters length, it adds 0 to the beginning if the base string is shorter than 3 characters
line 14 declares a string of pence value with padend with min 2 characters length, it adds 0 to the end if base string is shorter than 3 characters 
line 18 prints £, pounds and pence values

*/
