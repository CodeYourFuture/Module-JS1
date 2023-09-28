const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); // this initializes a value from the variable by calling the .padStart function with the target length "3" and it starts counting from "0".

// const pounds = paddedPenceNumberString.substring(
//   0,
//   paddedPenceNumberString.length - 2
// );

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initializes a string variable with the value "399p"
/* 2. const penceStringWithoutTrailingP= penceString.substring(
  0,
  penceString.length - 1
): This initializes a string variable by adding .substring to the variable "penceString" to extract with start index "0" and 
also using ".length - 1" property to remove the string P from the value of the variable "penceString" so as to give a numerical value for easy mathematical calculation for the code. */

/* 3.  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): 
this initializes a value from the variable by calling the .padStart function with "penceStringWithoutTrailingP variable" the target length "3" and 
the counting starts from the "0" */

/*const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
): This initializes a string variable by adding .substring to the variable "paddedPenceNumberString" to extract with start index "0" and 
also using ".length - 2" property to remove two strings from the value of the variable "paddedPenceNumberString". */

/* const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0"): The variable was declared so that it can take value from the properties assigned to it by adding .substring to "paddedPenceNumberString" to extract from the value gotten from (paddedPenceNumberString.length - 2) and by also calling the .padEnd() function which aims at the target length which is "2" and 
the counting starts from the "0"  */

//console.log(`£${pounds}.${pence}`): This prints out the value from both variable pound and pence respectively.