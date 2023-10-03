// Predict and explain first...
// We have asked to return num, but num has not been stated in the parameters
// Therefore we should change square(3), to square(num), and then we should
// Create a variable, and store the function with a value inside of the parameters of 3

// this function should square any number but instead we're going to get an error

function square(num) {
  return num * num;
}

let squareTest = square(3);
let squareTest2 = square(4);

console.log(squareTest);
console.log(squareTest2);
