// Find to-pounds.js in an earlier week in this repo

// Take this code and turn it into a reusable block of code.
// Declare a function called toPounds with an appropriately named parameter.
// Call this function a number of times to check it works for different inputs
// Declare a function called toPounds with an appropriately named parameter.
function toPounds(input) {
    // Convert the input string to a number.
    const number = parseFloat(input);

    // Convert the number from kilograms to pounds.
    const pounds = number * 2.20462;

    // Return the result.
    return pounds;
}

// Call this function a number of times to check it works for different inputs
console.log(toPounds("1")); // Expected output: 2.20462
console.log(toPounds("10")); // Expected output: 22.0462
console.log(toPounds("100")); // Expected output: 220.462