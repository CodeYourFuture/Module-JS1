// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("been"));
//prediction: The code is to iterate through the function and execute the code by converting the first value of string to uppercase and then slice from the string value of 1 whenever the function is called.
//capitalise("been");
//error: The error is occurring because there shouldn't be a variable declaration in the local scope. Also, the code should be executed by using the console.log function
