// You will need to implement a function getAngleType

// Acceptance criteria:

function getAngleType(degrees) {
  if (degrees === 90) {
    return "Right angle";
  } else if (degrees < 90) {
    return "Acute angle";
  } else if (degrees > 90 && degrees < 180) {
    return "Obtuse angle";
  } else if (degrees === 180) {
    return "Straight angle";
  } else if (degrees > 180 && degrees < 360) {
    return "Reflex angle";
  } else {
    return "This angle has no specific name";
  }
}

test("to discover angle types", function () {
  expect(getAngleType(90)).toBe("Right angle");
});

test("to discover angle types", function () {
  expect(getAngleType(80)).toBe("Acute angle");
});

test("to discover angle types", function () {
  expect(getAngleType(130)).toBe("Obtuse angle");
});

test("to discover angle types", function () {
  expect(getAngleType(180)).toBe("Straight angle");
});

test("to discover angle types", function () {
  expect(getAngleType(240)).toBe("Reflex angle");
});

// Given an angle in degrees,
//When the function getAngleType is called with this angle,
// Then it should:

// Identify Right Angles:
// If the angle is exactly 90 degrees,
// Then the function should return "Right angle"

// Identify Acute Angles:
// If the angle is less than 90 degrees,
// Then the function should return "Acute angle"

// Identify Obtuse Angles:
// If the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"

// Identify Straight Angles:
// If the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
// Identify Reflex Angles:

// If the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
