// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
console.log(capitalise(`hello karam`));
//because str already taken inside function parameter and we call a variable str in the main time what has been declare inside parameter
