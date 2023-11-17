// Predict and explain first...
// Write down the error you predict will be raised
// Why will an error occur when this program runs?
// Play computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
//.................................

// ANSWER.
// We want the computer to perform a task: take the (decimalNumber ),, multiply it by 100, and add a '%' sign. 
// However, we made a mistake by telling the computer "Hey computer, our special number is 'decimalNumber,' and by the way, it's 0.5!" 
// This  will confuse the computer and will  result an error. To fix this, we need to correct our instructions, 
// making sure that we only tell the computer about the (decimalNumber ) just once. If we solve this mistake, 
// the computer will be able to carried out the task, (this is really a good example of how important is to give clear instructions, 
//   and how important is to avoid repetition in computer programming).

//Playing computer results:

//  const decimalNumber is declared in the local scope
// const decimalNumber = 0.5;
//   A syntax error occurs here because you're trying to redeclare 'decimalNumber' in the same scope.

//   const percentage = `${decimalNumber * 100}%`;
//  This will not be reached due to the syntax error.

// then we Called the function
// convertToPercentage();
// This also results in a syntax error because we are trying to redeclare 'decimalNumber' in the same scope.

function convertToPercentage() {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}


console.log(convertToPercentage());

