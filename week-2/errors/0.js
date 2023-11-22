// Predict and explain first...
// write down the error you predict will be raised
// then call the function capitalise with a string input
// interpret the error message and figure out why it's happening, if your prediction was wrong

/* function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}


function, named capitalise, is meant to take a text input and change its first letter to a capital letter.
It takes a text (str) as an input parameter.
It converts the first letter of the input text to uppercase using str[0].toUpperCase().
t takes the remaining part of the text after the first letter using str.slice(1).
It combines the uppercase first letter with the rest of the text to create a new text string where the first letter is capitalized.
 Finally, it returns this newly formed text string.

 The problem is that the code tries to use the name "str" for two different things inside the function, which isn't allowed in JavaScript. we can't have two variables with the same name within the same block of code.
  To solve this issue, just rename the second "str" to something else, like "modifiedStr": */

function capitalise(str) {
  let modifiedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return modifiedStr;
}
console.log(capitalise("hello "));
//This way, each variable has its own unique name and the function will work without any errors.
