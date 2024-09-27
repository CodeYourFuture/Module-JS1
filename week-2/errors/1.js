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

/*We need to erase the declaration for the variable inside the function because leads a conflict between the
parameter and the value of the variable, resulting a syntaxis error. If we want to declare a variable we
must have to do it outside of the function, or we can rewrite the code as followeing:

function convertToPercentage (decimalNumber) {
decimalNumber = `${decimalNumber * 100}%`;
return decimalNumber;
}
cosnt decimalNumber = 0.5;
console.log(convertToPercentage(decimalNumber))*/
