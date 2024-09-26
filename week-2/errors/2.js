
// Predict and explain first...
// this function should square any number but instead we're going to get an error
// what is happening? How can we fix it?
// answer
// We can not use numbers as a parameter.
// the function doesn't know 'num'
// If we place "num" inside the parameter.
// And place the constant variable outside the function, it will work.
function square(num) {
    return num * num;
}
const result = square(3);
console.log(result);
