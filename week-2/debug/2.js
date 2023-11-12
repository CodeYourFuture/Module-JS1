// Predict and explain first...

const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
    
    // The function getLastDigit will not work properly because there is no parameter declared.
    // When we call the function, the passed arguments will not work. 
    // To correct this issue we can declare a parameter inside the function.
    // so just add "num" to the function as a parameter. So the function declaration will be "function getLastDigit(num)".
    // Now the problem is solved and the function getLastDigit will work properly.

