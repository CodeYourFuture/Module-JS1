// Predict and explain first...
// write down the error you predict will be raised
// then call the function capitalise with a string input
// interpret the error message and figure out why it's happening, if your prediction was wrong

const str = "fikret";

function capitalise(str) {
  const strCapitalised = `${str[0].toUpperCase()}${str.slice(1)}`;
  return strCapitalised;
}

console.log(capitalise(str));

// because of using same variable name and using let method function will return old str instead of new one
