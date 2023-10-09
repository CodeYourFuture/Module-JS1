// In week-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(str) {
  return `£${(Number(str.substring(0, str.length - 1)) / 100).toFixed(2)}`;
}

console.log(toPounds("499p"));
console.log(toPounds("293p"));
console.log(toPounds("27p"));