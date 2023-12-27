// Predict and explain first...
// write down the error you predict will be raised
  // => why to use let statement here? Also parameter name  and declaring variable also with the same name str.

// interpret the error message and figure out why it's happening, if your prediction was wrong

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }


// corrected code-:
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

// then call the function capitalise with a string input
let result = capitalise ("nepal");
console.log(result);


