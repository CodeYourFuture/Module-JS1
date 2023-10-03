// If products or services are subject to the 20% standard rate of VAT:
// You must add 20% to the price you charge for the goods or service.
// You can do this by multiplying the price you charge by 1.2.
// For example, if your business sells sports equipment for £50, you multiply £50 by 1.2 for a total VAT inclusive price of £60.

// Implement a function that calculates the new price with VAT (Value Added Tax) added on

// Given a number,
// When I call this function with a number
// it returns the new price with VAT added on

function withVat(price, goods) {
  if (goods === "electrical") {
    const electricalVat = 1.2;
    return `The price of your goods is £${price * electricalVat}`;
  } else if (goods === "household") {
    const householdVat = 1.2;
    return `The price of your goods is £${price * householdVat}`;
  } else if (goods === "sports") {
    const sportsVat = 0.8;
    return `The price of your goods is £${price * sportsVat}`;
  }
}

const electricalEquipment = withVat(50, "electrical");
const householdEquipment = withVat(210, "household");
const sportsEquipment = withVat(145, "sports");

console.log(electricalEquipment);
console.log(householdEquipment);
console.log(sportsEquipment);
