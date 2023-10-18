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

function isProperFraction(numerator, denominator) {
  if (denominator === 0) {
    return "Error: Denominator cannot be zero";
  } else if (numerator >= denominator) {
    return `The fraction ${numerator}/${denominator} is an improper fraction`;
  } else if (numerator < 0) {
    return `The fraction is ${numerator}/${denominator} a proper fraction`;
  } else {
    return `The fraction ${numerator}/${denominator} is a proper fraction`;
  }
}

//   console.log(isProperFraction(5,3));
// const currentOutput=isProperFraction(3,5);
// const targetOutput="is a fraction";
// console.assert(currentOutput==targetOutput,
//         "current output: %s, target output: %s 1",
//     currentOutput,
//     targetOutput
//     );

//     const currentOutput1=isProperFraction(5,3);
// const targetOutput1="Not a valid fraction";
// console.assert(currentOutput1==targetOutput1,
//         "current output: %s, target output: %s 2",
//     currentOutput1,
//     targetOutput1
//     );

//       const currentOutput2=isProperFraction(-4,8);
// const targetOutput2="`The fraction is ${numerator} a proper fraction`";
// console.assert(currentOutput2==targetOutput2,
//         "current output: %s, target output: %s 3",
//     currentOutput2,
//     targetOutput2
//     );

console.log(isProperFraction(-4, 8));
console.log(isProperFraction(-4, 0));
console.log(isProperFraction(-4, 0));
console.log(isProperFraction(5, 2));
console.log(isProperFraction(6, 6));
console.log(isProperFraction(6, -8));
// completed with Withe Elmira
