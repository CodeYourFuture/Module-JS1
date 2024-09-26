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
function angles(angleSize){
     if( angleSize >0 && angleSize < 90){
        return "Acute angle";
      }
    else if (angleSize == 90){
    
        return "Right angle" ;
      }
      else if( angleSize >90 && angleSize < 180){
        return "Obtuse angle";
      }
      else if( angleSize == 180){
        return "straight line" ;
      }
      else if( angleSize >180 && angleSize <= 360){
        return "reflex angle";
      }
}
console.log(angles(80));
console.log(angles(90));
console.log(angles(160));
console.log(angles(180));
console.log(angles(320));