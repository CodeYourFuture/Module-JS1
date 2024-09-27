// A set of words can be written grouped together in different cases.

// For example, "hello there" in snake case would be written "hello_there"
// UPPER_SNAKE_CASE means taking a string and writing it in all capitals with underscores for spaces

// Implement a function that:

// Given a string input like "hello there"
// When we call this function with the input string
// Then it returns the string in UPPER_SNAKE_CASE, so "HELLO_THERE"

// Test case: we expect "lord of the rings" to be "LORD_OF_THE_RINGS"
// Come up with a clear, simple name for the function
// Use the string documentation to help you plan your solution

function camelCaseToWords(text) {
  const result = text.replaceAll(/\s/g, "_");
  return result.toUpperCase();
}
const text1 = "lord of the rings";
const text2 = "the great gatsby";
const text3 = "the great gatsby";

console.log(camelCaseToWords(text1));
console.log(camelCaseToWords(text2));
console.log(camelCaseToWords(text3));
