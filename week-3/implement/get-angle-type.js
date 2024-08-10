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
  let angleType = "";

  if (angle < 90) {
    angleType = "Acute";
  } else if (angle === 90) {
    angleType = "Right";
  } else if (angle < 180) {
    angleType = "Obtuse";
  } else if (angle === 180) {
    angleType = "Straight";
  } else if (angle > 180) {
    angleType = "Reflex";
  }

  return `${angleType} angle`;
}

console.assert(getAngleType(50) === "Acute angle", "1");
console.assert(getAngleType(90) === "Right angle", "2");
console.assert(getAngleType(170) === "Obtuse angle", "3");
console.assert(getAngleType(180) === "Straight angle", "4");
console.assert(getAngleType(290) === "Reflex angle", "5");
