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

const test1 = "lord of the rings";
const test2 = "the great gatsby";
const test3 = "the da vinci code";

function upperSnakeCase(givenSentence) {
  const replacedSentence = givenSentence.replaceAll(" ", "_");
  const upperCasedSentence = replacedSentence.toUpperCase();
  return upperCasedSentence;
}

console.log(upperSnakeCase(test1));
console.log(upperSnakeCase(test2));
console.log(upperSnakeCase(test3));
