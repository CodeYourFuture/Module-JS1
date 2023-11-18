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
  if (angle >= 360 || angle <= 0) {
    return "Invalid angle";
  } else if (angle > 180) {
    return "Reflex angle";
  } else if (angle == 180) {
    return "Straight angle";
  } else if (angle > 90) {
    return "Obtuse angle";
  } else if (angle == 90) {
    return "Right angle";
  } else if (angle < 90) {
    return "Acute angle";
  }
}

function assertion(angle, targetOutput) {
  const currentOutput = getAngleType(angle);
  console.assert(
    currentOutput === targetOutput,
    `Test for ${angle}. Current output: %s, target output: %s`,
    currentOutput,
    targetOutput
  );
}

assertion(390, "Invalid angle");
assertion(-20, "Invalid angle");
assertion(270, "Reflex angle");
assertion(180, "Straight angle");
assertion(100, "Obtuse angle");
assertion(90, "Right angle");
assertion(45, "Acute angle");
