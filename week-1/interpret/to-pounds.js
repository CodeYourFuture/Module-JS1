const penceString = "399p";
console.log(penceString);

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

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
console.log(pence);

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step
// You should use MDN to look up substring, padStart and padEnd to interpret this program

// To begin, we can start with

// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP = penceString.substring( 0, penceString.length - 1);
// erase the letter p letting just the value 399.
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// 4. const pounds = paddedPenceNumberString.substring( 0, paddedPenceNumberString.length - 2);
// erase the values 99, letting just the value 3.
// 5. const pence = paddedPenceNumberString .substring(paddedPenceNumberString.length - 2) .padEnd(2, "0");
// erase the value 3 letting just the values 99.
// 6. console.log(`£${pounds}.${pence}`); print the symbol £ and concatenate the values pounds(3) + . + pence(99)
