// Predict and explain first...

//Constant (const) declaration of 103
//return converts the value of the num variable to a string (using the toString() method),
// console.log gives last digit of any number.

// This program should tell the user the last digit of each number...
// Explain why getLastDigit is not working properly - correct the problem...

/* The issue is that the function is not using the parameter passed to it. It always returns the last digit of the constant num, which is set to 103. The function should take a parameter and return the last digit of that parameter. */

/*

const num = 103; 
function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`); */

//here is my solution ;

function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
