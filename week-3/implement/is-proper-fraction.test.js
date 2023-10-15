// You wil need to implement a function isProperFraction
// You need to write assertions for your function to check it works in different cases

// Acceptance criteria:

function fractionChecker(a, b) {
  if (b === 0) {
    return "Error (Denominator cannot be zero)";
  } else if (a === b) {
    return false;
  } else if (a > b) {
    return false;
  } else if (a < b) {
    return true;
  } else if (-a < b) {
    return true;
  }
}

test("check's if number is a fraction", function () {
  expect(fractionChecker(2, 3)).toBe(true);
});

test("check's if number is a fraction", function () {
  expect(fractionChecker(5, 2)).toBe(false);
});

test("check's if number is a fraction", function () {
  expect(fractionChecker(3, 0)).toBe("Error (Denominator cannot be zero)");
});

test("check's if number is a fraction", function () {
  expect(fractionChecker(-4, 7)).toBe(true);
});

test("check's if number is a fraction", function () {
  expect(fractionChecker(3, 3)).toBe(false);
});

//
// Proper Fraction check:
// Input: numerator = 2, denominator = 3
// target output: true
// Explanation: The fraction 2/3 is a proper fraction, where the numerator is less than the denominator. The function should return true.

// console.log(fractionChecker(2, 3));
// const currentOutput1 = fractionChecker(2, 3);
// const targetOutput1 = true;
// console.assert(
//   currentOutput1 === targetOutput1,
//   "current output: ${currentOutput1}, target output: ${targetOutput1}",
//   currentOutput1,
//   targetOutput1
// );

//
// Improper Fraction check:
// Input: numerator = 5, denominator = 2
// target output: false
// Explanation: The fraction 5/2 is an improper fraction, where the numerator is greater than or equal to the denominator. The function should return false.

// console.log(fractionChecker(5, 2));
// const currentOutput2 = fractionChecker(5, 2);
// const targetOutput2 = false;
// console.assert(
//   currentOutput2 === targetOutput2,
//   `current output: ${currentOutput2}, target output: ${targetOutput2}`
// );

//
// Zero Denominator check:
// Input: numerator = 3, denominator = 0
// No target output: Error (Denominator cannot be zero)
// Explanation: The function should throw an error when the denominator is zero, as it's not a valid fraction.

// console.log(fractionChecker(3, 0));
// const currentOutput3 = fractionChecker(3, 0);
// const targetOutput3 = "Error (Denominator cannot be zero)";
// console.assert(
//   currentOutput3 === targetOutput3,
//   "current output: ${currentOutput3}, target output: ${targetOutput3}"
// );

// //
// // Negative Fraction check:
// // Input: numerator = -4, denominator = 7
// // target output: true
// // Explanation: The fraction -4/7 is a proper fraction because the absolute value of the numerator (4) is less than the denominator (7). The function should return true.

// console.log(fractionChecker(-4, 7));
// const currentOutput4 = fractionChecker(-4, 7);
// const targetOutput4 = true;
// console.assert(
//   currentOutput4 === targetOutput4,
//   `current output: ${currentOutput4}, target output: ${targetOutput4}`
// );

// //
// // Equal Numerator and Denominator check:
// // Input: numerator = 3, denominator = 3
// // target output: false
// // Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.
// // These acceptance criteria cover a range of scenarios to ensure that the isProperFraction function handles both proper and improper fractions correctly and handles potential errors such as a zero denominator.

// console.log(fractionChecker(3, 3));
// const currentOutput5 = fractionChecker(3, 3);
// const targetOutput5 = false;
// console.assert(
//   currentOutput5 === targetOutput5,
//   `current output: ${currentOutput5}, target output: ${targetOutput5}`
// );
