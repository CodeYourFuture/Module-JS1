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

// 1. const penceString = "399p": initializes a string variable with the value "399p"
//ans:
// 3-6: extract a substring of the string '399p' that starts from index 0 and has a length of 'penceString.length - 1' (3) which gives '399'
// 8. if previous answer has length less than 3, add string '0' to reach given length of 3 - not applicable here.
// 9-12: for previous answer (399), start from index 0, string must of length 'paddedPenceNumberString.length - 2' = 1. Ans = 3
//14-16: here index starts from 1 '.substring(paddedPenceNumberString.length - 2)' and continue to last index from 'a.padEnd(2, "0");'. so starting from index 1 and going to las index gives 99
