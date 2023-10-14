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

function toUpperSnakeCase(input) {
    // Split the input string into words
    const words = input.split(' ');

    // Convert each word to uppercase
    const upperWords = words.map(word => word.toUpperCase());

    // Join the words back together with underscores
    const upperSnakeCase = upperWords.join('_');

    // Return the result
    return upperSnakeCase;
}

// Test cases
console.log(toUpperSnakeCase("lord of the rings")); // Expected output: "LORD_OF_THE_RINGS"
console.log(toUpperSnakeCase("the great gatsby")); // Expected output: "THE_GREAT_GATSBY"
console.log(toUpperSnakeCase("the da vinci code")); // Expected output: "THE_DA_VINCI_CODE"