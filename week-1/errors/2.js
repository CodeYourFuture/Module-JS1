// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

// console.log(`I was born in ${cityOfBirth}`);
// const cityOfBirth = "Bolton";

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);


// The problem is here that variable cityOfBirth has been declared after using in template literal. First variable needs to be declared.