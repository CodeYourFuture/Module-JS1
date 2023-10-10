// Predict and explain first...

// Why will an error occur when this program runs?
// A const declaration within a function's body cannot have the same name as a parameter.
// Try playing computer with the example to work out what is going on

//

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
const test1 = convertToPercentage(0.3);
console.log(test1);

//////////////////////////////////////
// function calculateSum(a, b) {
//   return a + b;
// }
// let test1 = calculateSum(10, 11);
// console.log(test1);
// function logSum(a, b) {
//   console.log(a + b);
// }

// const result1 = calculateSum(10, 32);
// const result2 = logSum(10, 32);

// const fullName = function (name) {
//   const fullName = name.split(" ");
//   return `${fullName[0]}, ${fullName[3]}`;
// };

// console.log(fullName(`apple banana strowberry water`));

// Example usage:

// for (let w = 20; w <= 200; w += 10) {
//   console.log(w);
// }
