// Predict and explain first...
// write down the error you predict will be raised
// then call the function capitalise with a string input
// interpret the error message and figure out why it's happening, if your prediction was wrong

let str= "rabia"
function capitalise(str) {
    str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise (str));

// First it didn't work because Identifier 'str' has already been declared in function. I put let str above the function with a string then it works
