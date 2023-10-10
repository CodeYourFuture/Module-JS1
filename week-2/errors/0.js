// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
// an error occured because we are trying to create a variable with the same name used for the function parameter str in the same scope. this causes conflict and to fix this mistake a different name should be used.


function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

