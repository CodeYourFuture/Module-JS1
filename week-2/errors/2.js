// Predict and explain first...
// There are errors in the function definition.
// 1. The function parameter is hard-coded to 3.
// 2. Worse still, the parameter is not mentioned under the function as to what it is to do.
// 3. Very worse still, in the return part, num is not defined anywhere.
// Fixing the error is however simple. Just replace the parameter hard-coded as 3 with num. Ces't finis!

// this function should square any number but instead we're going to get an error

// function square(3) {
//     return num * num;
// }

// The corrected version below;
function square(num) {
  return num * num;
}

console.log(square(3));
