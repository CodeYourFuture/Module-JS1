const cardNumber = 4533787178994213;
let stringNumber = cardNumber.toString();
console.log(stringNumber);
const last4Digits = stringNumber.slice(-4);
console.log(last4Digits);
// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working

// Make and explain a prediction about why the code won't work
//The code is not working because .slice() is used in strings not in numbers.

// Then try updating the expression last4Digits is assigned to, in order to get the correct value
//We have to convert the cardNumber into a string and then we can use the function .slice().
