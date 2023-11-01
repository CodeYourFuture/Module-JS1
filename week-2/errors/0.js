// Predict and explain first...
// Prediction and explanation
/*
The function takes a string as an argument and returns the capitalized first letter of the string.
Inside the function,there is a new variable str is declared in which this will trigger an error because of 
the The function "capitalise" has also defined with a single parameter str, 
the error could be there is another variable called str and has already declared in the function parameter.
or the parameter str and the locally declared str variable inside the function have the same name.
to fix this we remove the keyword let as it has already been defined in the function parameter.
*/
// call the function capitalise with a string input
// there will be an error 

// interpret the error message and figure out why an error is occurring
//because of the let keyword that has been attached to a variable that has been defined.

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("name"));