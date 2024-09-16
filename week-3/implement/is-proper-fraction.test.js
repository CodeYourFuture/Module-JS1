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

function properFraction(num,den){

    if (den === 0)
    return 'Error';

    if (num < den)
    return 'True';

    if (num > den || num === den)
    return 'False';

    if (num < 0 && num < den)
    return 'True';

    if (num === den)
    return 'False';
       
    }

    // console.log(properFraction(2,3));
    // console.log(properFraction(5,2));
    // console.log(properFraction(3,0));
    // console.log(properFraction(-4,7));
    // console.log(properFraction(3,3));

// const currentOutput = properFraction(2,3);
// const targetOutput = 'True'

// console.assert(
//     currentOutput === targetOutput,
//     `current output: ${currentOutput}, target output: ${targetOutput}`
// )

// const currentOutput1 = properFraction(5,2);
// const targetOutput1 = 'False'

// console.assert(
//     currentOutput1 === targetOutput1,
//     `current output: ${currentOutput1}, target output: ${targetOutput1}`
// )

// const currentOutput2 = properFraction(3,0);
// const targetOutput2 = 'Error'

// console.assert(
//     currentOutput2 === targetOutput2,
//     `current output: ${currentOutput2}, target output: ${targetOutput2}`
// )

// const currentOutput3 = properFraction(-4,7);
// const targetOutput3 = 'True'

// console.assert(
//     currentOutput3 === targetOutput3,
//     `current output: ${currentOutput3}, target output: ${targetOutput3}`
// )

// const currentOutput4 = properFraction(3,3);
// const targetOutput4 = 'False'

// console.assert(
//     currentOutput4 === targetOutput4,
//     `current output: ${currentOutput4}, target output: ${targetOutput4}`
// )

test("checks if fraction is proper fraction", function () {
    expect(properFraction(2,3)).toBe(`True`);
    expect(properFraction(5,2)).toBe(`False`);
    expect(properFraction(3,0)).toBe(`Error`);
    expect(properFraction(-4,7)).toBe('True');
    expect(properFraction(3,3)).toBe('False');
  });