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
  return "Unknown angle";
}

console.assert(getAngleType(90) === "Right angle", "Right angle");
console.assert(getAngleType(45) === "Acute angle", "Acute angle");
console.assert(getAngleType(120) === "Obtuse angle", "Obtuse angle");
console.assert(getAngleType(180) === "Straight angle", "Straight angle");
console.assert(getAngleType(270) === "Reflex angle", "Reflex angle");
console.assert(getAngleType(360) === "Full angle", "Full angle");
console.assert(
  getAngleType(400) === "Full angle",
  "Full angle or Unknown angle"
);
