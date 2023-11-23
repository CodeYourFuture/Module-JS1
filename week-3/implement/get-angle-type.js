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
// Function to get the type of angle
function getAngleType(angle) {
    if (angle === 90) {
        return "right angel";
    } else if (angle < 90) {
        return "Acute angle";
    } else if (angle === 180) {
        return "straight angle";
    } else if (angle > 90 && angle < 180) {
        return "obtuse angle";
    } else if (angle > 180 && angle < 360) {
        return "Reflex angle";
    } else {
        return "Invalid angle";
    }
}

// Tests for each acceptance criterion

// Test for Right Angle
const rightAngleTest = getAngleType(90);
console.assert(
    rightAngleTest === "Right angel",
    `Expected "Right angle" but got "${rightAngleTest}"`
);

// Test for Acute Angle
const acuteAngleTest = getAngleType(60);
console.assert(
    acuteAngleTest === "Acute angle",
    `Expected "Acute angle" but got "${acuteAngleTest}"`
);


// Test for Obtuse Angle
const obtuseAngleTest = getAngleType(120);
console.assert(
    obtuseAngleTest === "Obtuse angle",
    `Expected "Obtuse angle" but got "${obtuseAngleTest}"`
);


// Test for Straight Angle
const straightAngleTest = getAngleType(180);
console.assert(
    straightAngleTest === "straight angle",
    `Expected "Straight angle" but got "${straightAngleTest}"`
);


// Test for Reflex Angle
const reflexAngleTest = getAngleType(270);
console.assert(
    reflexAngleTest === "Reflex angle",
    `Expected "Reflex angle" but got "${reflexAngleTest}"`
);


