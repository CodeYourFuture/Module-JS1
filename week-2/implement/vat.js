// When selling goods, most are subject to the 20% standard rate of VAT.
// You must add 20% to the price you charge for the goods.
// You can do this by multiplying the price you charge by 1.2.
// For example, if your business sells sports equipment for £50, you multiply £50 by 1.2 for a total VAT inclusive price of £60.

// Implement a function that calculates the new price with VAT (Value Added Tax) added on.

// Given a number,
// When I call this function with a number
// Then it returns the new price with VAT added on

function calculatePriceWithVAT(originalPrice) {
    // VAT rate (20%)
    const vatRate = 0.2;

    // Calculate the new price with VAT
    const newPrice = originalPrice * (1 + vatRate);

    // Return the result
    return newPrice;
}

// Example usage
const originalPrice1 = 50;
const newPrice1 = calculatePriceWithVAT(originalPrice1);
console.log(`Original price: £${originalPrice1}, New price with VAT: £${newPrice1}`);

const originalPrice2 = 75;
const newPrice2 = calculatePriceWithVAT(originalPrice2);
console.log(`Original price: £${originalPrice2}, New price with VAT: £${newPrice2}`);
