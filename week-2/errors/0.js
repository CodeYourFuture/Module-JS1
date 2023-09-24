// Predict and explain first...

// Because str has been stored as a value inside the function capitalize, meaning that it will not work,
// once a name has been used it cannot be reused as this will cause conflict.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let capitalizedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalizedStr;
}

const capitaliseTest = capitalise("hello");
const myNameCapTest = capitalise("marcus");

console.log(capitaliseTest);
console.log(myNameCapTest);
