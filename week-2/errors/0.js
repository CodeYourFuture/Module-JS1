// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
 return `${str[0].toUpperCase()}${str.slice(1)}`;
}
// it is storing the a new value in str which has already been declared.
// You can not use the same name as the function parameter because it cause naming conflict as it has already value stored inside the function.
