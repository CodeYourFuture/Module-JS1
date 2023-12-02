// Find to-pounds.js in an earlier week in this repo

// Take this code and turn it into a reusable block of code.
// Declare a function called toPounds with an appropriately named parameter.
// Call this function a number of times to check it works for different inputs

// Define the toPounds function
function toPounds(amountInKilograms) {
    // Conversion factor from kilograms to pounds
    const poundsPerKilogram = 2.20462;

    // Perform the conversion
    const amountInPounds = amountInKilograms * poundsPerKilogram;

    // Return the result
    return amountInPounds;
}

// Example usage of the toPounds function
const kilograms1 = 5;
const pounds1 = toPounds(kilograms1);
console.log(`${kilograms1} kilograms is equal to ${pounds1} pounds`);

const kilograms2 = 10;
const pounds2 = toPounds(kilograms2);
console.log(`${kilograms2} kilograms is equal to ${pounds2} pounds`);

const kilograms3 = 2.5;
const pounds3 = toPounds(kilograms3);
console.log(`${kilograms3} kilograms is equal to ${pounds3} pounds`);
