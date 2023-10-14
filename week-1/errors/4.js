const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

console.log(`I was born in ${last4Digits}`);

// invalid variable name that start with a digit which is not allowed in JS. we should use $ or _ or a letter at the start of the variable or following it.