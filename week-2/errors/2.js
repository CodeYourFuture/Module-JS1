// Predict and explain first...
// this function should square any number but instead we're going to get an error
// what is happening? How can we fix it?
// the error here is the (num) variable is not defined within the square function.
// to fix this error, we need to define the (num) variable within the square function, like this:

function square(num) {
  return num * num;
}

console.log(square(3));
