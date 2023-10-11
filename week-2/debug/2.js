// Predict and explain first...

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// My Explanation:
//The problem was that the num variable is declared outside the getLastDigit function, and it's always set to 103. This means that no matter what number you pass as an argument to the getLastDigit function, it will always return the last digit of 103 because it's using the num variable from the outer scope.
//To fix this issue and make the getLastDigit function work properly, should pass the number you want to extract the last digit from as an argument to the function. 
