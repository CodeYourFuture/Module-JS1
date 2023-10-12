// If products are subject to the 20% standard rate of VAT:
// You must add 20% to the price you charge for the goods or service.
// You can do this by multiplying the price you charge by 1.2.
// For example, if your business sells sports equipment for £50, you multiply £50 by 1.2 for a total VAT inclusive price of £60.

// Implement a function that calculates the new price with VAT (Value Added Tax) added on

// Given a number,
// When I call this function with a number
// it returns the new price with VAT added on

function includesVAT(items, price, vat) {
  //   const vatCalculation = price * 1.2;
  if (vat === true) {
    return `Your ${items} has vat. The price is:  price * 1.2`;
  } else {
    return price;
  }
}

console.log(includesVat(100));

// 1 = Provide items
// Option 1 = Clothing (Does have VAT) = £200 * 1.2 =  £240
// Option 2 = Cat items (Doesn't have VAT) = £45
// Option 3 = Shoes (Doesn't have VAT) = £120
// Option 4 = Garden equipment (Does have VAT) = £844 * 1.2 = £1012.80

// 2 = Does the product have 20% VAT?
// Step 1 = if statement for if true or not.
