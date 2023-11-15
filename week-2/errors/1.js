// Predict and explain first...

//ans ; we declared const decimalNumber inside the body function it mean it is Local scope, which never allow variable to call out side the function.
// as a result we face syntexError.
// Write down the error you predict will be raised
//ans; syntaxError
// Why will an error occur when this program runs?
//ans: Variable Scope: If the variable is defined within the function using the var, let, or const keyword, it is only accessible within that function's scope.
// Play computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
const decimalNumber = 0.5;
console.log(convertToPercentage(decimalNumber));
