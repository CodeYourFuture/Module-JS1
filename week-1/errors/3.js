const cardNumber = 4533787178994213;
const cardNumberAsString = cardNumber.toString()
const last4Digits = cardNumberAsString.slice(-4);

console.log(last4Digits);
// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Make and explain a prediction about why the code won't work
//ans: because we used const to declared variable and we can not reassign variable by using const.
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
