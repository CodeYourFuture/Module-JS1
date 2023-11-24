// Predict and explain first...
// Write down the error you predict will be raised
// Why will an error occur when this program runs?
// Play computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber); */

/*Answers
This code tries to make a special function called convertToPercentage. This function wants a number to work with, called decimalNumber. But inside this function, there's a mistake. It tries to create a special number and calls it decimalNumber again, which causes confusion. To fix this mix-up, here is my solution */

function convertToPercentage(decimalNumber) {
  return `${decimalNumber * 100}%`;
}

console.log(convertToPercentage(0.5));
console.log(convertToPercentage(0.4));
