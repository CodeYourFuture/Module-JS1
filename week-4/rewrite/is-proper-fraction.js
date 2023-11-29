function isProperFraction(numerator, denominator){ 
    if (denominator === 0)
return 'Denominator cannot be zero';

    if(numerator < denominator){
return true ;
}
    else (numerator > denominator || numerator === denominator)
return false;
    }

// Zero Denominator check: 3/0

const zeroDenominatorOutput = isProperFraction(3, 0);
console.assert(
    zeroDenominatorOutput === 'Error, Denominator cannot be zero',' The denominator is zero, it is not a valid fraction')
    

// Proper Fraction check: 2/3

const currentOutput =isProperFraction(2,3)
const targetOutput = true;
console.assert(
    currentOutput === targetOutput, 
     "current output: %s, target output: %s",
  currentOutput,
  targetOutput,
)
// Improper Fraction check: 5/2

const currentOutput2 =isProperFraction(5,2)
const targetOutput2 = false;
console.assert(
    currentOutput2 === targetOutput2, 
     "current output: %s, target output: %s",
  currentOutput2,
  targetOutput2,
)
// Negative Fraction check: -4,7

const currentOutput3 =isProperFraction(-4,7)
const targetOutput3 = true;
console.assert(
    currentOutput3 === targetOutput3, 
     "current output: %s, target output: %s", 
  currentOutput3,
  targetOutput3,'The function should return true.'
)
// Equal Numerator and Denominator check: 3,3

const currentOutput4 =isProperFraction(3,3)
const targetOutput4 = false;
console.assert(
    currentOutput4 === targetOutput4, 
     "current output: %s, target output: %s",
  currentOutput4,
  targetOutput4,
)


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
