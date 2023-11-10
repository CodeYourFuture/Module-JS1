const penceString = "0p";

console.log(`The value of penceString is: ${penceString}`);

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

console.log(
  `The value of penceStringWithoutTrailingP is: ${penceStringWithoutTrailingP}`
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

console.log(
  `The value of paddedPenceNumberString is: ${paddedPenceNumberString}`
);

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

console.log(`The value of pounds is: ${pounds}`);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`The value of pence is: ${pence}`);

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step
// You should use MDN to look up substring, padStart and padEnd to interpret this program

// To begin, we can start with

// 1. const penceString = "399p": initialises a string variable with the value "399p"

// Answers:

// 2. Remove the trailing "p" from the string

// 3. Pad the string with zeros to ensure it has as least 3 characters

// 4. Extract the pounds part from the string - all the characters except the last two

// 5. Extract the pence part from the string - the last two characters

// 6. Print formatted price with pounds and pence
