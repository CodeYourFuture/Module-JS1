// Predict and explain first...

// str has been stored as a value inside the function capitalize, meaning that it will not work,
// once a name has been used it cannot be reused as this will cause conflict.


// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

const capitaliseTest = capitalise("hi");
const myNameCapTest = capitalise("karam");

console.log(capitaliseTest);
console.log(myNameCapTest);
