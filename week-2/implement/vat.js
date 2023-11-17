// When selling goods, most are subject to the 20% standard rate of VAT.
// You must add 20% to the price you charge for the goods.
// You can do this by multiplying the price you charge by 1.2.
// For example, if your business sells sports equipment for £50, you multiply £50 by 1.2 for a total VAT inclusive price of £60.

// Implement a function that calculates the new price with VAT (Value Added Tax) added on.

// Given a number,
// When I call this function with a number
// Then it returns the new price with VAT added on
//.........................................................

//             ANSWER

function calculatePriceWithVAT(originalPrice) {
    const vatRate = 1.2; // 20% VAT rate
    const priceWithVAT = originalPrice * vatRate;
    return priceWithVAT;
  }

  const originalPrice = 50;
  const newPrice = calculatePriceWithVAT(originalPrice);
  
  console.log(`Original Price: £${originalPrice}`);
  console.log(`New Price with VAT: £${newPrice.toFixed(2)}`);
  