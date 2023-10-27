// get-angel-type.test.js

const { getAngleType } = require('./get-angle-type');

test(
    'Angle type for 80 degrees should be "Acute angle"',
    () => {
        expect(getAngleType(80)).toBe('Acute angle');
    }
);

test(
    'Angle type for 90 degrees should be "Right angle"',
    () => {
        expect(getAngleType(90)).toBe('Right angle');
    }
);
