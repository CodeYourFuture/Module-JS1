// Predict and explain first...

// Why will an error occur when this program runs? because it declaring 
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
 
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
const conversion1=convertToPercentage(0.5);
const conversion2=convertToPercentage(1);
const conversion3=convertToPercentage(0);

console.log(conversion1,conversion2,conversion3)
//console.log(decimalNumber);// this variable was called out of the scope of the function.
//const decimalNumber  = 0.5; it was using same name as the function parameter which was causing the naming conflict.
//JavaScript does not allow redeclaration of variables with the same name within the same scope.


