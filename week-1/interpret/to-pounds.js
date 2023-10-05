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

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2- onst penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);
// creates a new string variable called penceStringWithoutTrailingP by using the substring method to remove the last character (which is "p") from the penceString
// const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");: Here, we create another string variable called paddedPenceNumberString. It uses the padStart method to add leading zeros to make the string 3 characters long
// 
// const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");: Here, we create a string variable called pence. It extracts the last two characters from paddedPenceNumberString, representing pence. Then, it uses padEnd to ensure that pence is exactly 2 characters long. So, "399" becomes "99", and after padding, it's still "99".

// console.log(£${pounds}.${pence}); logs the formatted price to the console