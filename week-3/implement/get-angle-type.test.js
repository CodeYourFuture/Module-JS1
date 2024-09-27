// Implement a function getAngleType, and tests for each of the acceptance criteria.

// Acceptance criteria:

// Identify Right Angles:
// When the angle is exactly 90 degrees,
// Then the function should return "Right angle"

// Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"

// Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"

// Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"

// Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"

function getAngleType(angle) {
  if (angle === 90) return "Right angle";
  if (angle < 90) return "Acute angle";
  if (angle === 180) return "Straight angle";
  if (angle < 180) return "Obtuse angle";
  if (angle === 360) return "Full angle";
  if (angle < 360) return "Reflex angle";
  else return "Unknown angle";
}

console.assert(getAngleType(90) === "Right angle", "Right angle");
console.assert(getAngleType(45) === "Acute angle", "Acute angle");
console.assert(getAngleType(120) === "Obtuse angle", "Obtuse angle");
console.assert(getAngleType(180) === "Straight angle", "Straight angle");
console.assert(getAngleType(270) === "Reflex angle", "Reflex angle");
console.assert(getAngleType(360) === "Full angle", "Full angle");
console.assert(getAngleType(400) === "Unknown angle", " Unknown angle");

//I have just wondered and tried with console.log
console.log(getAngleType(180)); // Output: "Straight angle"
console.log(getAngleType(45)); // Output: "Acute angle"
console.log(getAngleType(100)); // Output: "Obtuse angle"
console.log(getAngleType(360)); // Output: "Full angle"
console.log(getAngleType(30)); // Output: "Acute angle"
console.log(getAngleType(270)); // Output: "Reflex angle"
console.log(getAngleType(400)); // Output: "Unknown angle"

//write tests here and ans then change the name od the  file to an .test.js file do it for implement week 3

test('Angle of 90 should return "Right angle"', () => {
  expect(getAngleType(90)).toBe("Right angle");
});

test('Angle of 45 should return "Acute angle"', () => {
  expect(getAngleType(45)).toBe("Acute angle");
});

test('Angle of 120 should return "Obtuse angle"', () => {
  expect(getAngleType(120)).toBe("Obtuse angle");
});

test('Angle of 180 should return "Straight angle"', () => {
  expect(getAngleType(180)).toBe("Straight angle");
});

test('Angle of 270 should return "Reflex angle"', () => {
  expect(getAngleType(270)).toBe("Reflex angle");
});

test('Angle of 360 should return "Full angle"', () => {
  expect(getAngleType(360)).toBe("Full angle");
});

test('Angle of 400 should return "Unknown angle"', () => {
  expect(getAngleType(400)).toBe("Unknown angle");
});
