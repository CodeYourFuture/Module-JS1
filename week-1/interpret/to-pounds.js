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

console.log(pence);

// console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

// Line 3 - 6. penceStringWithoutTrailingP = function() - Targets the string length which is "399p",
// and then removes the p using penceString.length to get to the last character,
// and a -1 to target the p (Which is the last character).

// Line 8. paddedPenceNumberString = Adding padding before your initial number (399) and then asking for 3 leading numbers of 0,
// which allows you to store pence and pounds. (example: 399, 099 DOT NOT ADDED YET!!);

// Line 9 - 12. const pounds = Created a substring, that targets from the initial string "3" to the end,
// but then it asks to subtract 2 from the entire string "399" which leaves us with (3) |399|
// ------------------------------------------------------------------------------------ |012| -- Order

// Line 14 - 16. const pence = Created a substring again, that targets from the initial string "3" to the end,
// but then it asks to subtract 2 from the entire string "399" which leaves us with (3), exactly the same as Line 9.
// there is also a padEnd, which gives us 2 leading numbers of 0. Which will allow us to store our pence.
