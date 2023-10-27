// Implement a function getAngleType

// Acceptance criteria:

// Given an angle in degrees,
// When the function getAngleType is called with this angle,
// Then it should:

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

//const getAngleType = require("./get-angle-type.test");
function getAngleType(angle) {
  if (typeof angle === "number" && angle >= 0 && angle <= 360) {
    if (angle === 90) {
      return "Right angle";
    } else if (angle < 90) {
      return "Acute angle";
    } else if (angle > 90 && angle < 180) {
      return "Obtuse angle";
    } else if (angle === 180) {
      return "Straight angle";
    } else if (angle > 180 && angle < 360) {
      return "Reflex angle";
    }
  } else return " Value should be a number between 0 & 360";
}
console.log(getAngleType(90)); // right angle
console.log(getAngleType(88)); // Acute angle
console.log(getAngleType(91)); // Obtuse angle
console.log(getAngleType(180)); // Straight angle
console.log(getAngleType(181)); // Reflex angle
console.log(getAngleType(-1));

describe("getAngleType function", () => {
  test('returns "Right angle" for 90 degrees', () => {
    expect(getAngleType(90)).toBe("Right angle");
  });

  test('returns "Acute angle" for values less than 90', () => {
    expect(getAngleType(45)).toBe("Acute angle");
    expect(getAngleType(0)).toBe("Acute angle");
  });

  test('returns "Obtuse angle" for values between 90 and 180', () => {
    expect(getAngleType(120)).toBe("Obtuse angle");
    expect(getAngleType(179)).toBe("Obtuse angle");
  });

  test('returns "Straight angle" for 180 degrees', () => {
    expect(getAngleType(180)).toBe("Straight angle");
  });

  test('returns "Reflex angle" for values between 180 and 360', () => {
    expect(getAngleType(270)).toBe("Reflex angle");
    expect(getAngleType(359)).toBe("Reflex angle");
  });

  test('returns "Value should be a number between 0 & 360" for invalid inputs', () => {
    expect(getAngleType(-1)) === "Value should be a number between 0 & 360";
    expect(getAngleType(400)) === "Value should be a number between 0 & 360";
    expect(getAngleType("abc")) === "Value should be a number between 0 & 360";
  });
});
