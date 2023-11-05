const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Make and explain a prediction about why the code won't work
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// cardNumber.slice is not a function!
// .slice() is commonly used for string manipulation or arrays, and if we want to use it with numbers, we need to convert the number to a string first in this case.
// We can either assign variable 'carrNumber' to a string by enclosing it in quotation marks or convert the variable to a string.

console.log(last4Digits);
