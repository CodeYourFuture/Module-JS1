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
//  const penceString = "399p": initialises a string variable with the value "399p"

// It stores actual number value of the string.From index of 0 until second last index of the string.so it can exclude letter p.

//This line is ensuring that if its length is less than 3 characters, it adds "0" characters at the beginning of the string 
//to make it a total of 3 characters long. If the original string is already 3 characters or longer, no padding is added.

//It is storing first index of the string which is 3 in variable pounds and represent the number of pounds in that string, while excluding remaining number.

// It is storing last two indexes of the string which are 99 in variable pence and represent the number of pence in that string, 
//while excluding remaining number. After extracting the last two digits, 
//the padEnd method is used to ensure that the string is always two characters long. If the extracted substring is less than two characters, it pads the string with zeros on the right side until it reaches a length of 2.
//It is displaying total number of pounds and pence. 
