// When selling goods, most are subject to the 20% standard rate of VAT.
// You must add 20% to the price you charge for the goods.
// You can do this by multiplying the price you charge by 1.2.
// For example, if your business sells sports equipment for £50, you multiply £50 by 1.2 for a total VAT inclusive price of £60.

// Implement a function that calculates the new price with VAT (Value Added Tax) added on.

// Given a number,
// When I call this function with a number
// Then it returns the new price with VAT added on

function priceWithVAT(basePrice) {
  const totalPrice = basePrice * 1.2;
  return `£${(Math.round(totalPrice * 100) / 100).toFixed(2)}`;
}

const test1 = 100;
const test2 = 78344234;
const test3 = 7.367;

console.log(priceWithVAT(test1));
console.log(priceWithVAT(test2));
console.log(priceWithVAT(test3));
