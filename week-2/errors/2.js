/* Answer
there's a syntax error in the function definition. Function parameters should be variables, not specific values or numbers. In this case, 3 is being used as a parameter, which isn't allowed in JavaScript function declarations.

To fix this, we should declare the function with a parameter representing the number we want to square. */
function square(num) {
  return num * num;
}
console.log(square(4));
console.log(square(3));
console.log(square(5));
