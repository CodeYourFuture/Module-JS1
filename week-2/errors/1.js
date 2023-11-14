// Predict and explain first...
// Write down the error you predict will be raised
// Why will an error occur when this program runs?
// Play computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.6));

// because of the variable decimalNumber is declared inside the function we can not give another value to the function to see the percentage value

// the variable is already declared as in the parameter section we dont need to give a value inside the function
