// Predict and explain first...

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
  // => getLastDigit function doesnt have arguement but in console log it uses the number 42, 105, 806. function should have a parameter number, then it will work as expected.


  const num = 103;

  function getLastDigit(number) {
    return number.toString().slice(-1);
  }
  
  console.log(`The last digit of 42 is ${getLastDigit(42)}`);
  console.log(`The last digit of 105 is ${getLastDigit(105)}`);
  console.log(`The last digit of 806 is ${getLastDigit(806)}`); 