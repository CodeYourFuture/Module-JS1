// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
/*
answer: you can not use the variable of cityOfBirth after console.log() 
we must declare the variable first because JS coding style is from top to bottom
*/
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
