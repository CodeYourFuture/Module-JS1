const penceString = "399p";
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
); // clears p
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); // 339 no need to 0
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
); // it takes out last 2 characters so we only have 3
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0"); // make it  2 characters long and add 0 but no need it's already 2 character and still 99

console.log(`£${pounds}.${pence}`); // 3,99

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step
// You should use MDN to look up substring, padStart and padEnd to interpret this program

// To begin, we can start with

/* 1. const penceString = "399p": initialises a string variable with the value "399p" 

  2.const penceStringWithoutTrailingP = penceString.substring( 0, penceString.length - 1  );  penceStringWithoutTrailingP takes a substring of penceString starting from index 0 and ending at the length of penceString minus 1. This effectively removes the last character "p" from penceString.
  if penceString is "399p", then penceStringWithoutTrailingP would be "399" because it removes the trailing "p" from the original string. The purpose of this operation seems to be to get the numeric part of the string without the currency symbol ("p" in this case).


3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");   

The padStart method is used to ensure that paddedPenceNumberString is always three characters long. If the length is less than 3, "0" is padded to the start of the string.


4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2 );
pounds is assigned the substring of paddedPenceNumberString starting from index 0 and ending two characters before the length of paddedPenceNumberString. This extracts the part of the string representing pounds.


5. const pence = paddedPenceNumberString .substring(paddedPenceNumberString.length - 2).padEnd(2, "0");

pence is assigned the last two characters of paddedPenceNumberString, and if the length is less than 2, "0" is padded to the end of the string.




console.log(`£${pounds}.${pence}`);  £3.99 */

//The padStart method is used to pad the start of a string with a specified character (or a specified string) until the resulting string reaches a given length. Here, we are using padStart to ensure that paddedPenceNumberString is at least 3 characters long. If the length of penceStringWithoutTrailingP is less than 3 characters, it will pad the start of the string with zeros until it reaches a length of 3.This method is used to pad a string with a specified character at the beginning until it reaches a certain length. While doing this, the original string remains unchanged; a new string is returned.The first parameter of the padStart method specifies the target length, and the second parameter specifies the character to be added during the padding.

// Since the length of penceStringWithoutTrailingP is already 3, padStart does not add any zeros, and paddedPenceNumberString remains "399".So, in this case, no zeros are added in front of the number because the length requirement is already met. If the length was less than 3, it would pad with zeros accordingly.
