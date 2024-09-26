const penceString = "399p";
//  "penceSting" variable declare  with "399p" value
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
// "penceStringWithoutTrailingP" is create new value by taking substring from "penceString"
// function subString remove the last index by subtract -1 from  "penceString"length
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//paddedPenceNumberString is create a value by add 0 in "penceStringWithoutTrailingP"
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
//"pounds" is create a value by taking subString from "paddedPenceNumberString"
//function subString remove the last index by subtract -2 from  "paddedPenceNumberString"length
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
