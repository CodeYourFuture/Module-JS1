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

function triangleAngle(degrees){
    if (degrees === 90)
    return 'Right angle';

    else if (degrees < 90 && degrees > 0)
    return 'Acute angle';
    
    else if (degrees > 90 && degrees < 180)
    return 'Obtuse';

    else if (degrees === 180)
    return 'Straight angle'

    else if (degrees > 180 && degrees < 360)
    return 'Reflex angle'

    else if (degrees < 0)
    return 'Negative angle'

    else if (degrees === 360)
    return 'Full rotation-360 degrees'

    else if (degrees >360)
    return 'Greater than 360'

    else 
    return 'Invalid angle'
    }

    console.log(triangleAngle(90));
    console.log(triangleAngle(45));
    console.log(triangleAngle(105));
    console.log(triangleAngle(180));
    console.log(triangleAngle(220));
    console.log(triangleAngle(-23));
    console.log(triangleAngle(360));
    console.log(triangleAngle(420));