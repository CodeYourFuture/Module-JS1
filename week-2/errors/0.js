// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let capitalizedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalizedStr;
}

//The variable str is already declared as the function parameter. You cannot declare a new variable with the same name within the same scope.
// The variable name inside the function should be changed.
