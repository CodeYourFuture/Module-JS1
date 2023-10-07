// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring


///////////////////////////////////////////////////////////////////
// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }
///////////////////////////////////////////////////////////////////


// there's a syntax error this the `capitalise` function ; while the function has been given a parameter, `str` ; 
// and it's like a declaration for str , another time in the body of function `str`  is declared 
// ` let str = `${str[0].toUpperCase()}${str.slice(1)}`;` and this is the reason of `SyntaxError: Identifier 'str' has already been declared` ;
// to fix this simply we can remove declaration on `str` in the body of the function as below .


// capitalise2 is corrected version of the original function :
function capitalise2(str){
  str=str[0].toUpperCase()+str.slice(1);
  return str;
}


console.log(capitalise2("hello world!"));
