// You wil need to implement a function isProperFraction
// You need to write assertions for your function to check it works in different cases

// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator

// Acceptance criteria:

// Proper Fraction check:
// Input: numerator = 2, denominator = 3
// target output: true
// Explanation: The fraction 2/3 is a proper fraction, where the numerator is less than the denominator. The function should return true.

// Improper Fraction check:
// Input: numerator = 5, denominator = 2
// target output: false
// Explanation: The fraction 5/2 is an improper fraction, where the numerator is greater than or equal to the denominator. The function should return false.

// Zero Denominator check:
// Input: numerator = 3, denominator = 0
// No target output: Error (Denominator cannot be zero)
// Explanation: The function should throw an error when the denominator is zero, as it's not a valid fraction.

// Negative Fraction check:
// Input: numerator = -4, denominator = 7
// target output: true
// Explanation: The fraction -4/7 is a proper fraction because the absolute value of the numerator (4) is less than the denominator (7). The function should return true.

// Equal Numerator and Denominator check:
// Input: numerator = 3, denominator = 3
// target output: false
// Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.

// These acceptance criteria cover a range of scenarios to ensure that the isProperFraction function handles both proper and improper fractions correctly and handles potential errors such as a zero denominator.






// function dived(a, b) {
//   if (a < b) {
//     return true;
//   } else if (a >= b {
//     return false;
//   } else if (b == 0){
//     return "Error (Denominator cannot be zero)";
//   }else if(abs.a < b)){
//     return true;
//   }else if ( a === b){
//     return false;
//   }
// }

// console.log(dived(-2, 3));



function isProperFraction(a, b) {
  if(b === 0){
    return "Error (Denominator cannot be zero)";
  }
  return a < b;
}

console.log(isProperFraction(2, 3)); // This will return true
console.log(isProperFraction(5, 2)); // This will return false
console.log(isProperFraction(3, 0)); // This will return false