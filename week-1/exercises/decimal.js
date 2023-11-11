
const num = 56.5467;

// You should look up Math functions for this exercise  
// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
    var wholeNumberpart= Math.floor(num);
// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5467 ( the decimal part of num )
      var decimalpart= num-Math.floor(num);
// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )
   var rounded= Math.round(num);
// Log your variables to the console to check your answers
console.log(wholeNumberpart);
console.log(decimalpart);
    console.log(rounded);