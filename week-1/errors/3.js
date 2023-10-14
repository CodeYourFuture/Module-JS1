const cardNumber = "4533787178994213";
const last4Digits = cardNumber.toString().slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Make and explain a prediction about why the code won't work
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
console.log(last4Digits);

// we cannot use slice with a number as it is used only with strings so to convert the cardNumber to a string we just add """