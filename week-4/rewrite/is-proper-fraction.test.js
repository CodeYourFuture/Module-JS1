function isProperFraction(numerator, denominator) {
  if (denominator === 0) {
    throw Error("Denominator cannot be zero");
  }

  if (numerator < denominator) {
    return true;
  } else if (numerator > denominator || numerator === denominator) {
    return false;
  }
}

// Zero Denominator check: 3/0

test("zero denominator check", function () {
  //GIVEN
  const targetOutput = "Denominator cannot be zero";
  const input1 = 3;
  const input2 = 0;

  //WHEN
  const f = function () {
    isProperFraction(input1, input2);
  };

  //THEN
  expect(f).toThrow(targetOutput);
});

// Proper Fraction check: 2/3

test("proper fraction check ", function () {
  //GIVEN
  const targetOutput = true;
  const input1 = 2;
  const input2 = 3;

  //WHEN
  const currentOutput = isProperFraction(input1, input2);

  //THEN

  expect(currentOutput).toBe(targetOutput);
});

// Improper Fraction check: 5/2

test("improper fraction check ", function () {
  //GIVEN
  const targetOutput = false;
  const input1 = 5;
  const input2 = 2;

  //WHEN
  const currentOutput = isProperFraction(input1, input2);

  //THEN

  expect(currentOutput).toBe(targetOutput);
});

// Negative Fraction check: -4,7

test("negative fraction check ", function () {
  //GIVEN
  const targetOutput = true;
  const input1 = -4;
  const input2 = 7;

  //WHEN
  const currentOutput = isProperFraction(input1, input2);

  //THEN

  expect(currentOutput).toBe(targetOutput);
});

// Equal Numerator and Denominator check: 3,3

test("equal numerator and denominator check ", function () {
  //GIVEN
  const targetOutput = false;
  const input1 = 3;
  const input2 = 3;

  //WHEN
  const currentOutput = isProperFraction(input1, input2);

  //THEN

  expect(currentOutput).toBe(targetOutput);
});

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
