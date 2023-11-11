// Predict and explain first...
// Ans. decimalNumber not found
// Write down the error you predict will be raised
// Why will an error occur when this program runs?
// Ans. Because the value of variable decimalNumber is fixed at 0.5 within function
// Play computer with the example to work out what is going on

let decimalNumber = 0.5

function convertToPercentage(decimalNumber) {
  // const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(decimalNumber));
