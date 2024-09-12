// Predict and explain first...

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);



// In the provided code snippet, there is a function called sum that takes two parameters, 
// a and b. However, there is an issue with the return statement in the function.
// The return statement is followed by a line of code a + b;,
// but this line of code will not be executed because  the return statement ends the function execution and returns control to the calling context.
// Therefore, the a + b; line is essentially unreachable code.
// Additionally, the return statement itself does not have any value associated
// with it (i.e., it is return;), so the function will implicitly return undefined.
// As a result, when you call sum(10, 32) and try to interpolate the result into 
// the template string in the console.log statement, it will display: 
// The sum of 10 and 32 is undefined
// To fix this issue and correctly calculate the sum, you should remove 
// the return; statement and directly return the result of the addition:

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
