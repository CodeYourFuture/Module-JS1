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
  if (typeof angle === "number" && angle >= 0 && angle <= 360) {
    if (angle === 90) {
      return "Right angle";
    } else if (angle < 90) {
      return "Acute angle";
    } else if (angle > 90 && angle < 180) {
      return "Obtuse angle";
    } else if (angle === 180) {
      return "Straight angle";
    } else return "Reflex angle";
  } else return " Value should be a number between 0 & 360";
}

const currentOutput = getAngleType(90); //-->actual value
const targetOutput = "Right angle"; //--> idea
console.assert(
  currentOutput == targetOutput,
  "current output: %s, target output: %s 1",
  currentOutput,
  targetOutput
);

const currentOutput1 = getAngleType(30); //-->actual value
const targetOutput1 = "Acute angle"; //--> idea
console.assert(
  currentOutput1 == targetOutput1,
  "current output: %s, target output: %s 2",
  currentOutput1,
  targetOutput1
);

const currentOutput2 = getAngleType(120); //-->actual value
const targetOutput2 = "Obtuse angle"; //--> idea
console.assert(
  currentOutput2 == targetOutput2,
  "current output: %s, target output: %s 3",
  currentOutput2,
  targetOutput2
);

const currentOutput3 = getAngleType(180);
const targetOutput3 = "Straight angle";
console.assert(
  currentOutput3 == targetOutput3,
  "current output: %s, target output: %s 4",
  currentOutput3,
  targetOutput3
);
const currentOutput4 = getAngleType(185);
const targetOutput4 = "Reflex angle";
console.assert(
  currentOutput4 == targetOutput4,
  "current output: %s, target output: %s 5",
  currentOutput4,
  targetOutput4
);

console.log(getAngleType(360));
console.log(getAngleType(true));
console.log(getAngleType(-120));
// completed with Withe Elmira
