const getAngleType = require("./get-angle-type");


test('Identify Right Angles When the angle is exactly 90 degrees,Then the function should return "Right angle". When the angle is less than 90 degrees, Then the function should return "Acute angle". ', () => {

    expect(getAngleType(60)).toBe("Acute angle");
    
});

test('When the angle is greater than 90 degrees and less than 180 degrees,Then the function should return "Obtuse angle".When the angle is exactly 180 degrees,Then the function should return "Straight angle" ', () => {

    expect(getAngleType(180)).toBe("Straight angle");
    
});

test('When the angle is greater than 180 degrees and less than 360 degrees, Then the function should return "Reflex angle" ', () => {

    expect(getAngleType(280)).toBe("Reflex angle");
    
});
