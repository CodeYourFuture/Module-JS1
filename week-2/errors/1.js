// Predict and explain first...
// Write down the error you predict will be raised
// Why will an error occur when this program runs?
// Play computer with the example to work out what is going on

const decimalNumber = 0.5; // defines decimalNumber in the outer scope

function convertToPercentage(decimalNumber) {
  //const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

/*Answers

The variable decimalNumber is declared as a parameter inside the convertToPercentage function. Therefore, it's only accessible within the scope of that function. Trying to access decimalNumber outside of the function will result in a ReferenceError because it's not defined in that outer scope. So I defined decimalNumber  in that scope.*/

console.log(convertToPercentage(0.5));
console.log(convertToPercentage(0.4));
