const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);
console.log(last4Digits);
// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Make and explain a prediction about why the code won't work
//ans: I think we use .slice method for string. According to me, .toFixed() method will work on card. The method .toFixed() is used for numerical values .
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
