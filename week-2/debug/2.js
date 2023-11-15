// Predict and explain first...
// Ans: the code define num variable with value 0f 103. We have function called getLastDigit. 
//Inside the function, it simply prints out the result of last digit using  return num.toString().slice(-1).
//After defining the function, the code calls the getLastDigit() function, passing 42, 105 and 806 as the arguments.
//The results of the function call are inserted into a template literal 
//`The last digit of 42 is ${getLastDigit(42)}`); output: 3
//`The last digit of 105 is ${getLastDigit(105)}`); output: 3
//`The last digit of 806 is ${getLastDigit(806)}`); output: 3


const numOne = 42;
const numTwo = 105;
const numThree = 806;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(numOne, 42)}`);
console.log(`The last digit of 105 is ${getLastDigit(numTwo, 105)}`);
console.log(`The last digit of 806 is ${getLastDigit(numThree, 806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
//Ans: The key issue is that getLastDigit() function doesn't accept any parameters. It always just returns the last digit of the num variable defined outside the function.
// So when you call getLastDigit(42), the 42 is ignored.
// Inside getLastDigit(), it converts the num variable (which is 103) to a string, takes the last character (3) and returns that.
// It has no way to access the 42 value passed to it.
// To fix it, you need to update the function to accept a parameter.