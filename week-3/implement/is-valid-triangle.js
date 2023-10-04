// Implement a function isValidTriangle

function isValidTriangle(a, b, c) {
  if (a + b <= c || b + c <= a || a + c <= b) {
    return false;
  }
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  } else {
    return true;
  }
}

// Acceptance criteria:

// Given the lengths of three sides of a triangle (a, b, c),
// When the function isValidTriangle is called with these side lengths as input,
// Then it should:

//
// scenario: invalid triangle
// Given the side lengths a, b, and c,
// When the sum of any two side lengths is less than or equal to the length of the third side (i.e., a + b <= c, a + c <= b, b + c <= a),
// Then it should return false because these conditions violate the Triangle Inequality, which states that the sum of the lengths of any two sides of a triangle must be greater than the length of the third side.

console.log(isValidTriangle(10, 10, 0));
const currentOutput1 = isValidTriangle(10, 10, 0);
const targetOutput1 = false;
console.assert(
  currentOutput1 === targetOutput1,
  "current output: %s, target output: %s",
  currentOutput1,
  targetOutput1
);

//
// scenario: invalid triangle
// Check for Valid Input:
// Given the side lengths a, b, and c,
// When any of the side lengths is less than or equal to zero,
// Then it should return false because a triangle cannot have zero or negative side lengths.

console.log(isValidTriangle(0, 50, 50));
const currentOutput2 = isValidTriangle(0, 50, 50);
const targetOutput2 = false;
console.assert(
  currentOutput2 === targetOutput2,
  "current output: %s, target output: %s",
  currentOutput2,
  targetOutput2
);

//
// scenario: valid triangle
// Given valid side lengths that satisfy the conditions mentioned above,
// When the function is called with these side lengths,
// Then it should return true because the input forms a valid triangle.
// This specification outlines the behavior of the isValidTriangle function for different input scenarios, ensuring it properly checks for invalid side lengths and whether they form a valid triangle according to the Triangle Inequality Theorem.

console.log(isValidTriangle(20, 40, 50));
const currentOutput3 = isValidTriangle(20, 40, 50);
const targetOutput3 = true;
console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output: %s",
  currentOutput3,
  targetOutput3
);
