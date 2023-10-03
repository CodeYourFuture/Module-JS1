const num = -58.4567;

// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
// Create a variable called decimalPart and assign to it an expression that evaluates to 0.4567 ( the decimal part of num )
// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )

// Log your variables to the console to check your answers

//note in second line there's a typo and whole number should be 58 not 56 . 
let wholeNumberPart=Math.trunc(num);
console.log(wholeNumberPart);

let decimalPart=num-Math.floor(num); //this expression doesn't work on negative numbers. and also return an estimated value of floated part.
let decimalPart2=num.toString().substring(num.toString().indexOf(".")+1); //this one works better lol
console.log(decimalPart);
console.log(decimalPart2);

let roundedNum=Math.round(num);
console.log(roundedNum)
