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
function getAngleType (angle) {
     if (angle===90) {
       return  "Right angle";
     }   
      if (angle<90) {
       return  "Acute angle";
     } 
      if (angle>90<180) {
       return  "Obtuse angle";
     }
     if (angle===180) {
       return  "Straight angle";
     }
}

const currentOutput=getAngleType(90);//-->actual value
const targetOutput="Right angle";//--> idea
console.assert(currentOutput==targetOutput,
        "current output: %s, target output: %s 1",
    currentOutput,
    targetOutput
    );

    const currentOutput1=getAngleType(30);//-->actual value
const targetOutput1="Acute angle";//--> idea
console.assert(currentOutput1==targetOutput1,
        "current output: %s, target output: %s 2",
    currentOutput1,
    targetOutput1
    );

    const currentOutput2=getAngleType(120);//-->actual value
const targetOutput2="Obtuse angle";//--> idea
console.assert(currentOutput2==targetOutput2,
        "current output: %s, target output: %s 3",
    currentOutput2,
    targetOutput2
    );

    const currentOutput3=getAngleType(180);//-->actual value
const targetOutput3="Straight angle";//--> idea
console.assert(currentOutput3==targetOutput3,
        "current output: %s, target output: %s 4",
    currentOutput3,
    targetOutput3
    );