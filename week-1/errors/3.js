const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);
/*The reason the code won't work is that cardNumber is a numeric value, not a string. 
The slice() method is used with strings to extract a portion of the string, 
but it cannot be used directly on a numeric value.*/
// solution
/*Convert the card number to a string by enclosing the value of cardNumber variable in quotes ''
or use the function String() to implicitly convert cardNumber to a string, 
*/
// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Make and explain a prediction about why the code won't work
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
