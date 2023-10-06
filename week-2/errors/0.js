// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let capitalisestr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisestr;
}
console.log(capitalise("hello")); // Output: "Hello"

//My Explanation:there is a problem with variable naming.You have defined a function called capitalise that takes a str parameter, but inside the function, you are also trying to declare a variable with the same name str. This will result in a syntax error because you cannot declare two variables with the same name in the same scope.
//In this corrected code, I changed the variable name from str to capitalizedStr inside the capitalise function to avoid the conflict, and now the code should work without any syntax errors.