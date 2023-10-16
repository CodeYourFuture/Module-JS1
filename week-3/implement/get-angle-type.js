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

function getAngleType(angel){

    if(typeof angel=='number'){
        if(angel===90) return 'Right angel';

        else if(angel<90 && angel>=0) return 'Acute angel';

        else if(angel>90 && angel<180) return 'Obtuse angel' ;

        else if(angel===180) return 'Straight angel' ;

        else if (angel>180 && angel<360) return 'Reflex angel' ;

        else if(angel===360) return 'Full angel';  // it hasn't been menthioned if angel is 360 degree ; which is a full angel.

        else return `Please Enter the degree's value in range of [0,360] (Including)`;

        
    }

    else return 'Enter a valid value'
}
    


        

    


console.assert(getAngleType(90)==='Right angel');
console.assert(getAngleType(76)==='Acute angel');

console.log(getAngleType(123));
console.log(getAngleType(0));
console.log(getAngleType(90));
console.log(getAngleType(180));
console.log(getAngleType(270));
console.log(getAngleType(720));
console.log(getAngleType(true));
console.log(getAngleType('t'));
console.log(getAngleType('9'));