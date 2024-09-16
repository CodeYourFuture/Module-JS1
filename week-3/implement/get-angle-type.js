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
  
  
function getAngleType(angle){
    if (angle==90){
        return "right angle";
    } else if(angle < 90){
        return "acute angle";
    } else if (angle == 180){
      return "straight angle";
    } else if (angle >90 && angle <180){
        return "obtuse angle";
    } else if (angle >180 && angle <360){
        return "reflex angle"; 
    } else {
        return "invalid";
    }
}
console.log(getAngleType(90));