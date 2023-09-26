//const cardNumber = 4533787178994213;

//TypeError: cardNumber.slice is not a function
//we wanted to use slice method on a variable, cardNumber is string

//const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Make and explain a prediction about why the code won't work
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

const cardNumber = `4533787178994213`;
const last4Digits = cardNumber.slice(-4);
console.log(last4Digits);
