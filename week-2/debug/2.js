// Predict and explain first...
// the global variable num has a fixed value and the function has no argument as we need to use the function we
// will get only the number 3 in any case of using the function because of the fixed value.
// to make the function work we remove the num variable to the function argument/parameter with no value.

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// will get only the number 3 in any case of using the function because of the fixed value.
// to correct the function we move the variable num to the function parameter.
