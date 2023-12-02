// Predict and explain first...
// write down the error you predict will be raised
// Str is being redeclared 
// then call the function capitalise with a string input
// interpret the error message and figure out why it's happening, if your prediction was wrong

let str = "areeb"

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}


console.log(capitalise(str));