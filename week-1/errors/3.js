// const cardNumber = 4533787178994213;
// const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Make and explain a prediction about why the code won't work
// The method slice just works with strings, so We have to turn the number in a string before slice.
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);

console.log(Number(last4Digits));