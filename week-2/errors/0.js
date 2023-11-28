// Predict and explain first...
// write down the error you predict will be raised
// then call the function capitalise with a string input
// interpret the error message and figure out why it's happening, if your prediction was wrong

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}



// Predicted Error:
// I expect that there will be an error related to the redeclaration of the variable str within the function. 
// JavaScript does not allow redeclaration of variables using the let keyword in the same scope.
// Now, let's call the capitalise function: 
// capitalise("example");
// Interpretation of the Error (if prediction was correct):
// The error message would likely be something like "Identifier 'str' has already been declared" 
// because the variable str is being declared again in the function, 
// and it's in the same scope as the function parameter. 
// The variable name str is used for both the function parameter and the local variable, 
// causing a conflict.

// Corrected Version:
// To fix this issue, you should use a different variable name for the local variable inside the function, like this:

function capitalise(str) {
  let capitalizedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalizedStr;
}
//This way, there won't be a redeclaration conflict, and the function should work correctly.





