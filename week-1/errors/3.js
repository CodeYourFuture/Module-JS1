//const cardNumber = 4533787178994213;
//const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Make and explain a prediction about why the code won't work
// Then try updating the expression last4Digits is assigned to, in order to get the correct value





const cardNumber = 4533787178994213;
const cardNumberString = cardNumber.toString(); // Converte o número para uma string
const last4Digits = cardNumberString.slice(-4);

console.log(`The last 4 digist: ${last4Digits}`);


// We need to change from a nunm