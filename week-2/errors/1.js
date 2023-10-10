// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  // const decimalNumber = 0.5;
  percentage = `${decimalNumber * 100}%`;

  return percentage;
}
console.log (convertToPercentage(0.5));

//Prediction: The code defines a function that takes any number given as decimalNumber as input and return the value of statement in the local scope to the console at the global scope by converting any argument to percentage.

//Error: An error occurred because the variable decimalNumber was declared after it has been given as a parameter/argument to the function. Also, percentage can perform well as a variable with "let" or as a statement.
