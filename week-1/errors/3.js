const cardNumber = "4533787178994213";
const last4Digits = cardNumber.slice(-4);

console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Make and explain a prediction about why the code won't work
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// answer
// The slice method is used on strings, not numbers. with "" made string then slice function worked

