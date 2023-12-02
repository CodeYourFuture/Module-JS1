// A set of words can be written grouped together in different cases.

// For example, "hello there" in snake case would be written "hello_there"
// UPPER_SNAKE_CASE means taking a string and writing it in all capitals with underscores for spaces

// Implement a function that:

// Given a string input like "hello there"
// When we call this function with the input string
// Then it returns the string in UPPER_SNAKE_CASE, so "HELLO_THERE"

// Test case: we expect "lord of the rings" to be "LORD_OF_THE_RINGS"
// Test case: we expect "the great gatsby" to be "THE_GREAT_GATSBY"
// Test case: we expect "the da vinci code" to be "THE_DA_VINCI_CODE"

// Come up with a clear, simple name for the function
// Use the string documentation to help you plan your solution

// **** Let's create a function called convertToUpperCaseWithUnderscores that takes a string as 
//  input and returns the string in UPPER_SNAKE_CASE:
/**
 * Converts a given string to UPPER_SNAKE_CASE.
 * @param {string} inputString - The input string to be converted.
 * @returns {string} The input string in UPPER_SNAKE_CASE.
 */
function convertToUpperCaseWithUnderscores(inputString) {
  // Split the input string into an array of words
  const words = inputString.split(" ");

  // Capitalize each word and join them with underscores
  const upperSnakeCaseString = words.map(word => word.toUpperCase()).join("_");

  return upperSnakeCaseString;
}

// Test cases
console.log(convertToUpperCaseWithUnderscores("lord of the rings")); // Output: "LORD_OF_THE_RINGS"
console.log(convertToUpperCaseWithUnderscores("the great gatsby")); // Output: "THE_GREAT_GATSBY"
console.log(convertToUpperCaseWithUnderscores("the da vinci code")); // Output: "THE_DA_VINCI_CODE"

// In this function:

// The split(" ") method is used to split the input string into an array of words.
// The map function is used to capitalize each word with toUpperCase().
// The join("_") method is used to join the capitalized words with underscores.
// The resulting string is returned in UPPER_SNAKE_CASE.