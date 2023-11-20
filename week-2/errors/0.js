// Predict and explain first...
//Ans: You're absolutely right! Calling the capitalize function as shown would result in a SyntaxError.
//The key reason is that the capitalize function has not been defined anywhere before calling it.
//In JavaScript, you have to first declare/define a function before you can call it.

// write down the error you predict will be raised
//ans ; syntaxError.
// then call the function capitalize with a string input
// interpret the error message and figure out why it's happening, if your prediction was wrong
//ans;  My prediction was right about syntaxError..



//here is the correct
function capitalize(text) {
  let str = `${text[0].toUpperCase()}${text.slice(1)}`;
  return str;
}
let text = "i like ice-cream";
console.log(capitalize(text));
