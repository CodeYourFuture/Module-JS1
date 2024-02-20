// Predict and explain first...
// write down the error you predict will be raised
// then call the function capitalise with a string input
// interpret the error message and figure out why it's happening, if your prediction was wrong


function capitalise(str) {
 let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
} 

// error message would be identifier str has already been declared because 
//str is defined two times, once in function parameter and again in function body, to chnage the error, all we hve to do is remove let from let str and it will work 