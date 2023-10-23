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

for (let angle = 45, i = 0; angle <= 360, i < 5; angle += 45, i++) {
  //angles are defined to cover all the angle type
  const types = [
    "Acute angle",
    "Right angle",
    "Obtuse angle",
    "Straight angle",
    "Reflex angle",
  ];
  console.assert(
    getAngleType(angle) === types[i],
    `currentOutput: %s, targetOutput: %s`,
    getAngleType(angle),
    types[i]
  );
}

function getAngleType(angle) {
  return angle === 90
    ? "Right angle"
    : angle > 0 && angle < 90
    ? "Acute angle"
    : angle > 90 && angle < 180
    ? "Obtuse angle"
    : angle === 180
    ? "Straight angle"
    : angle > 180 && angle < 360
    ? "Reflex angle"
    : "Invalid angle";
}

module.exports = getAngleType;

// tests with console.log
console.log(getAngleType(-5), " : Invalid expected");
console.log(getAngleType(0), " : Invalid expected");
console.log(getAngleType(60), " : Acute expected");
console.log(getAngleType(90), " : Right expected");
console.log(getAngleType(140), " : Obtuse expected");
console.log(getAngleType(180), " : Straight expected");
console.log(getAngleType(250), " : Reflex expected");
