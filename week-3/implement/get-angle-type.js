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


function getAngleType(number) {
    if(number===90){
        return "Right angle";
    }
    else if(number<90){
        return "Acute angle";
    }
    else if(number > 90 && number < 180){
        return "Obtuse angle";
    }
    else if(number===180){
        return "Straight angle";
    }
    else if(number > 180 && number < 360){
        return "Reflex angle";
    }

}

const currentOutput = getAngleType(38);
const targetOutput = "Acute angle";
console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);

const currentOutput2 = getAngleType(90);
const targetOutput2 = "Right angle";
console.assert(
  currentOutput2 === targetOutput2,
  "current output: %s, target output: %s",
  currentOutput2,
  targetOutput2
);

const currentOutput3 = getAngleType(260);
const targetOutput3 = "Reflex angle";
console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output: %s",
  currentOutput3,
  targetOutput3
);

const currentOutput4 = getAngleType(180);
const targetOutput4 = "Straight angle";
console.assert(
  currentOutput4 === targetOutput4,
  "current output: %s, target output: %s",
  currentOutput4,
  targetOutput4
);

const currentOutput5 = getAngleType(143);
const targetOutput5 = "Obtuse angle";
console.assert(
  currentOutput5 === targetOutput5,
  "current output: %s, target output: %s",
  currentOutput5,
  targetOutput5
);

