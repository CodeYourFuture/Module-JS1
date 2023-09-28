const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); // convert to 100 place values (in case it's less than 100s)
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
); // extract the pound portion, that is, the digit(s) before the last 2 digits in any given value. Even if less than 100p, the padded 0's at the start (from the previous code line) takes care of it

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0"); //the substring ensures the last 2 digits are extracted out from a given value. ".padEnd" ensures there are exactly digits. If less than 2, 0 is introduced at the end to get up to 2 digits.

console.log(`£${pounds}.${pence}`); //The values obtained from pounds and pence are placed such that they are separated with a decimal point

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP : removes the symbol of pence, p. This uses .subString method
//which extracts a substring starting from index 0 until full length of string minus 1. The reason for this is
//to ensure the last digit, p, is not included. Hence, irrespective of the length of the penceString, as long as it ends with "p",
//the function works fine.
// 3. const paddedPenceNumberString : this ensures the pence string contains at least 3 digits. In case the penceStringWithoutP is less than 3 digits,
//0's is/are added before the pence digit(s) to make it up. The method ".padStart" does the job here.
// 4. const pounds : using ".subString method", the pound part of the pence is extracted by leaving out the last 2 characters. The role of the padding in the previous
//paddedPenceNumberString comes into play here. This is especially so, in case the pence value is less than 100p or more than 999p.
// 5. const pence : pence extracts the characters from the paddedPenceNumberString ensuring the focus is on the last 2 characters. If the extracted
//substring is less than 2 characters, .padEnd ensures 0's are added to and (start=2) ensures the characters are kept at exactly 2 digits.
// 6. The `£${pounds}.${pence}` combines value obtained from pounds and pence to give value in the format £xx.xx
