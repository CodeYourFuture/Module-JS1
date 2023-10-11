// If products or services are subject to the 20% standard rate of VAT:
// You must add 20% to the price you charge for the goods or service.
// You can do this by multiplying the price you charge by 1.2.
// For example, if your business sells sports equipment for £50, you multiply £50 by 1.2 for a total VAT inclusive price of £60.

// Implement a function that calculates the new price with VAT (Value Added Tax) added on

// Given a number,
// When I call this function with a number
// it returns the new price with VAT added on

function calculatePriceWithVAT(originalPrice) {
  // Calculate the price with VAT by multiplying the original price by 1.2 (for a 20% VAT rate)
  const priceWithVAT = originalPrice * 1.2;
  
  return priceWithVAT;
}

const originalPrice = 50; // Original price without VAT
const priceWithVAT = calculatePriceWithVAT(originalPrice);
console.log(`Original price: £${originalPrice}`);
console.log(`Price with VAT: £${priceWithVAT}`);
