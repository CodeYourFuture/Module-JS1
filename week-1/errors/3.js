const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Make and explain a prediction about why the code won't work
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//My answer:
//The code is not working simply because "slice method" does not work with numerical value. It is a method primarily used with strings and arrays.

// Therefore I tried solving it with two ways;
// --- First method ---//
const cardNumber = 4533787178994213;
const cardNumberString = cardNumber.toString();
const last4Digits = cardNumberString.slice(-4);
console.log(last4Digits);

//----The second way; ---//
//In addition, to handle large numbers like this, we can also work with them as strings from the beginning to avoid errors.
const cardNumber = "4533787178994213";
const last4Digits = cardNumber.slice(-4);
console.log(last4Digits);
