// A set of words can be written grouped together in different cases.

// For example, "hello there" in snake case would be written "hello_there"
// UPPER_SNAKE_CASE means taking a string and writing it in all capitals with underscores for spaces

// Implement a function that:

// Given a string input like "hello there"
// When we call this function with the input string
// Then it returns the string in UPPER_CAMEL_CASE, so "HELLO_THERE"

// Test case: we expect "lord of the rings" to be "LORD_OF_THE_RINGS"
// Test case: we expect "the great gatsby" to be "THE_GREAT_GATSBY"
// Test case: we expect "the da vinci code" to be "THE_DA_VINCI_CODE"

// Come up with a clear, simple name for the function
// Use the string documentation to help you plan your solution

/* function upperCamelCase(text) {
  let upperCamelCaseText = text.replaceAll(" ", "_").toUpperCase();
  return upperCamelCaseText;
} */

// This approach is supported by all browser versions (except Android Browser 2.1 - 4.3 due toUpperCase)
function upperCamelCase(text) {
  const upperCaseTextArray = text.toUpperCase().split(" ");

  return upperCaseTextArray.join("_");
}


console.log(upperCamelCase("lord of the rings"));
console.log(upperCamelCase("the great gatsby"));
console.log(upperCamelCase("the da vinci code"));
