// Predict and explain first...
// write down the error you predict will be raised
// then call the function capitalise with a string input
// interpret the error message and figure out why it's happening, if your prediction was wrong
// function capitalise(str) {
//  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

//....................................
// the problem is that  (str) is already the input to the function

function capitalise(str) {
  let capitalizedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalizedStr;
}

const originalString = "i love cyf"; 
const capitalizedString = capitalise(originalString);

console.log(`Original: ${originalString}`);
console.log(`Capitalized: ${capitalizedString}`);



