// Predict and explain first...
// write down the error you predict will be raised
// then call the function capitalise with a string input
// interpret the error message and figure out why it's happening, if your prediction was wrong

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

The error message we predict will be raised is: "TypeError: Cannot read property 'toUpperCase' of undefined."

This error occurs because the function capitalise is trying to access the first character of the string str using str[0]. However, the string str is undefined, which means it has not been assigned a value.

To fix this error, we need to ensure that the string str is defined before the function capitalise is called. 

function capitalise(str) {
  if (typeof str !== 'string' || str.length === 0) {
     throw new TypeError('Expected a non-empty string');
  }
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
 }
 
 console.log(`The last digit of 42 is ${capitalise('42')}`);
 console.log(`The last digit of 105 is ${capitalise('105')}`);
 console.log(`The last digit of 806 is ${capitalise('806')}`);
 