// Predict and explain first...

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// in the function definition part lines 3 to 6 ; return has been written by its own and it doesn't return anything 
// actually its return is undefined , and the line after the a+b has been written ,
//the corrected version of function is like what you cansee below :

function sumCorrectedVersion(a,b){
  return a+b;
}

console.log(`what corrected version of sun will return is ${sumCorrectedVersion(10, 32)}`);
