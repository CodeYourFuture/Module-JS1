// Predict and explain first...
// The function capitalise is aimed at converting the first letter (i.e. index 0 character) to uppercase and then,
// keep the remaining characters unchanged and joined (using slice from index 1 char) to the first character that is now changed to uppercase
// The function would fail to work because defining function parameter should be done within the function without
// DECLARING the parameter like a variable

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
// The error occurs because of the declaration keyword -let- used within the function. Remove the keyword, the function runs fine

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

let test = capitalise("yinka");
console.log(test);
console.log(capitalise("bababunmi")); //another example
