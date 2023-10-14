// When selling goods, most are subject to the 20% standard rate of VAT.
// You must add 20% to the price you charge for the goods.
// You can do this by multiplying the price you charge by 1.2.
// For example, if your business sells sports equipment for £50, you multiply £50 by 1.2 for a total VAT inclusive price of £60.

// Implement a function that calculates the new price with VAT (Value Added Tax) added on.

// Given a number,
// When I call this function with a number
// Then it returns the new price with VAT added on

function calculatePriceWithVAT(price) {
    // Check if the input is a number
    if (typeof price !== 'number') {
        throw new Error('The input must be a number');
    }

    // If the input is a negative number, throw an error
    if (price < 0) {
        throw new Error('The input must not be a negative number');
    }

    // Calculate the new price with VAT added on
    const vatRate = 0.2;
    const priceWithVAT = price * (1 + vatRate);

    // Return the new price with VAT added on
    return priceWithVAT;
}

// Test the function with different inputs
console.log(calculatePriceWithVAT(50)); // Expected output: 60
console.log(calculatePriceWithVAT(100)); // Expected output: 120
console.log(calculatePriceWithVAT(0)); // Expected output: 0