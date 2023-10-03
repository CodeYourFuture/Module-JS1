// Predict and explain first...

// Why will an error occur when this program runs? because it declaring 
// Try playing computer with the example to work out what is going on

function convertToPercentage() {
  const decimalNumber  = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
//console.log(decimalNumber);// this variable was called out of the scope of the function.
//const decimalNumber  = 0.5; it was using same name as the function parameter which was causing the naming conflict.
//JavaScript does not allow redeclaration of variables with the same name within the same scope.


