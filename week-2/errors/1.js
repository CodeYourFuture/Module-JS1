// Predict and explain first...
// Write down the error you predict will be raised
// Why will an error occur when this program runs?
// Play computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  // const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));


// We cannot redeclare a variable using const within the same scope. so need to remove  const decimalNumber = 0.5; from the function. 
// and then write function and (0.5) parameter in console.log




