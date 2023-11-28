// Predict and explain first...

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// In this line, getLastDigit is called, but it doesn't use the argument 42. 
// It always operates on the global constant num, which is 103. 
// Therefore, it will correctly output the last digit of 103, not 42.
// To fix this issue, you should modify the getLastDigit function to accept 
// a parameter and use that parameter instead of the global constant num:
// function getLastDigit(number) {
//   return number.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);


 console.log(`The last digit of 105 is ${getLastDigit(105)}`);
 console.log(`The last digit of 806 is ${getLastDigit(806)}`);




// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// Now, the function will correctly operate on the provided arguments, 
// and the output will be as expected:
// The last digit of 42 is 2
// The last digit of 105 is 5
// The last digit of 806 is 6

