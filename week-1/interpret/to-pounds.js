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
// 2. penceString.length = 4 : total number of count of a string.
// 3. penceString.length - 1 = 3
// 4. penceString.substring(0,penceString.length - 1); -> penceString.substring(0,3)
// 5. penceString.substring(0,3); = 399: it selects character between (0,3) so it remove "p".
// 6. penceStringWithoutTrailingP.padStart(3, "0"); : 399 has already 3 character and the padStart ask to add "o" upto having three digit.  
// 7. paddedPenceNumberString = 399;
// 8. paddedPenceNumberString.length - 2 = 1;
// 9. pound = paddedPenceNumberString.substring( 0,1) = 3;
// 10. paddedPenceNumberString.substring(paddedPenceNumberString.length - 2)--> paddedPenceNumberString.substring(3 - 2)
// 11. 399.paddedPenceNumberString.substring(3 - 2)= 99;
// 12. pence= 99.padEnd(2,"0")--> 99 has already 2 digit so no need to add "0";
// 13. console.log(`£${pounds}.${pence}`);= 3.99;