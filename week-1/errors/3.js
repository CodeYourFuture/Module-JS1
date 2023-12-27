// const cardNumber = 4533787178994213;
// const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Make and explain a prediction about why the code won't work
// Then try updating the expression last4Digits is assigned to, in order to get the correct value


// => slice method is a string method but card Number is a numeric Value. First we have to convert this cardNumber to string.

const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
