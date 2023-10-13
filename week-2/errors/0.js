// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}


/*  is trying to declare a new variable called str inside the function, 
which conflicts with the function parameter str. This is not allowed 
because it causes a redeclaration of a variable in the same scope.  */