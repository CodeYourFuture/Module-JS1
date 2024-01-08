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
    return "Error: Denom cannot be 0";
  } else if (numerator < denominator) {
    return true;
  } else if (numerator >= denominator) {
    return false;
  } else if (numerator < 0 && Math.abs(numerator) < denominator) {
    return true;
    //  condition checks if the fraction has a negative numerator. The Math.abs() function finds the absolute value, which is the positive size or amount of a number, no matter if it's negative or positive. So, for a negative number, its absolute value gives the positive size of that number.
  } else if (numerator === denominator) {
    return false;
  }
}

console.assert(isProperFraction(2, 3) === true, "Proper Fraction  failed");
console.assert(isProperFraction(5, 2) === false, "Improper Fraction failed");

const zeroDenominatorResult = isProperFraction(3, 0);

console.assert(
  zeroDenominatorResult === "Error: Denom cannot be 0",
  "Zero Denominator failed"
);

console.assert(isProperFraction(-4, 7) === true, "Negative Fraction  failed");
console.assert(
  isProperFraction(3, 3) === false,
  "Equal Numerator and Denominator  failed"
); // to see assertion message we can change (7,8)

/*
isProperFraction(2, 3) → It's a proper fraction because the numerator is less than the denominator. The test should return true.
isProperFraction(5, 2) → This is not a proper fraction because the numerator is greater than or equal to the denominator. The test should return false.
isProperFraction(3, 0) → It should return an error because the denominator is zero.
isProperFraction(-4, 7) → It's a proper fraction because the numerator is negative and its absolute value is less than the denominator. The test should return true.
isProperFraction(3, 3) → This is not a proper fraction because the numerator and the denominator are equal. The test should return false.
*/
test("Proper fraction with numerator less than denominator should return true", () => {
  expect(isProperFraction(2, 3)).toBe(true);
});

test("Improper fraction with numerator greater than or equal to denominator should return false", () => {
  expect(isProperFraction(5, 2)).toBe(false);
});

test("Zero denominator should return error message", () => {
  expect(isProperFraction(3, 0)).toBe("Error: Denom cannot be 0");
});

test("Negative numerator less than denominator in absolute value should return true", () => {
  expect(isProperFraction(-4, 7)).toBe(true);
});

test("Equal numerator and denominator should return false", () => {
  expect(isProperFraction(3, 3)).toBe(false);
});
