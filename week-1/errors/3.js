const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Make and explain a prediction about why the code won't work

// the code is not working because, the function ".slice()" is a string function

// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// We can manually edit the cardNumber to str or convert it to string using .toString() function
