// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;

}

// This function will not work because the variable string has been declared twice. First in the parameters of the function and second in line 7. Therefore I have removed let str and replaced it with return. Now the code should work.
console.log(capitalise("aisha"));
