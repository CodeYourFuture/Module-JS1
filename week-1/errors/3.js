const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Make and explain a prediction about why the code won't work
// CardNumber is a variable not a function (Wrong Prediction) Card number is a number and needs to be converted to a string before slicing
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
console.log(Number(last4Digits));