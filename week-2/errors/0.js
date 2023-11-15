// Predict and explain first...
// write down the error you predict will be raised
//ans ; syntaxError.
// then call the function capitalize with a string input
// interpret the error message and figure out why it's happening, if your prediction was wrong
//ans;  Indicates that there is an attempt to declare the variable str more than once in the same scope variable. My prediction is right.

function capitalize(text) {
  let str = `${text[0].toUpperCase()}${text.slice(1)}`;
  return str;
}
let text = "i love you";
console.log(capitalize(text));
