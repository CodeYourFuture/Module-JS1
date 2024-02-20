const cardNumber = "4533787178994213";
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working - it wasnt working because slice function works on a string and not a number, the cardNumber variable was a number first and i chnaged it from number to string by adding speechmarks 
// Make and explain a prediction about why the code won't work
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

console.log(last4Digits)