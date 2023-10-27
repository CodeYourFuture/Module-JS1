const {isValidTriangle} = require('./is-valid-triangle'); 

test('return "its a scalene traingle" for 2,3,4', () => {
  expect(isValidTriangle(2, 3, 4)).toBe('its a scalene traingle');
});

test('return "its a equilateral triangle" for 3,3,3', () => {
  expect(isValidTriangle(3, 3, 3)).toBe('its a equialterial taringle');
});

test('return "its isosceles triangle" for 3,3,4', () => {
  expect(isValidTriangle(3, 3, 4)).toBe('its isosecle traingle');
});

test('return "1,3,6 are not valid values to create a triangle" for 1,3,6', () => {
  expect(isValidTriangle(1, 3, 6)).toBe('values are not valid to create a trangle');
});
