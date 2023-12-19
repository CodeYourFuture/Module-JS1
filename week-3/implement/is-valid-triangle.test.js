const isValidTriangle = require('./is-valid-triangle');

test('When the function isValidTriangle is called, return false for any triangle where the sum of any two sides is less than or equal to the length of the third side.and we need to return true for any triangle where the sum of any two sides is greater than the length of the third side.' , () => {


expect(isValidTriangle(3, 3, 3)).toBe(false);
});