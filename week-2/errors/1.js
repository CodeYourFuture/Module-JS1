// Predict and explain first...
// Write down the error you predict will be raised
// Why will an error occur when this program runs?
// Play computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

The error we predict will be raised is a ReferenceError.

The reason an error will occur when this program runs is because the variable decimalNumber is declared twice within the function convertToPercentage. The first declaration is within the function's scope, and the second declaration is outside the function's scope.

In JavaScript, declaring a variable with the same name in a smaller scope does not overwrite the variable in the larger scope. Instead, it creates a new variable in the smaller scope. In this case, the variable decimalNumber declared outside the function is not accessible within the function, so when the function tries to access it, a ReferenceError will be raised.

To fix this error, we can simply remove the second declaration of decimalNumber, as it is not necessary.

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
 
  return percentage;
 }
 
 console.log(convertToPercentage(0.5));
 