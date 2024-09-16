// Find to-pounds.js in an earlier week in this repo

// Take this code and turn it into a reusable block of code.
// Declare a function called toPounds with an appropriately named parameter.
// Call this function a number of times to check it works for different inputs
//.....................................


//ANSWER

function toPounds(dollars) {
    const exchangeRate = 0.73;
    const pounds = dollars * exchangeRate;
    return pounds;
  }
  
  const amount1 = 50;
  const amount2 = 100;
  const amount3 = 50;
  const amount4 = 100;
  
  console.log(`$${amount1} is £${toPounds(amount1).toFixed(2)}`);
  console.log(`$${amount2} is £${toPounds(amount2).toFixed(2)}`);
  console.log(`$${amount3} is £${toPounds(amount2).toFixed(2)}`);
  console.log(`$${amount4} is £${toPounds(amount2).toFixed(2)}`);
  
  
  