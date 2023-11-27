const isProperFraction = require('./is-proper-fraction');


test('isProperFraction returns true for proper fraction', () => {
  // Call the function with a specific time
  const numerator = 2;
  const denominator = 3;
  const result = isProperFraction(numerator, denominator);

  // Use the expect function to check if the result matches the expected output
  expect(result).toBe(true);
});

test('The function should throw an error when the denominator is zero, as it\'s not a valid fraction', () => {
  // Arrange
  const numerator = 4;
  const denominator = 0;

  // Act
  const result = isProperFraction(numerator, denominator);

  // Assert
  expect(result).toBe('Error (Denominator cannot be zero)');
});


test('isProperFraction returns false for improper fraction', () => {
  // Arrange
  const numerator = 5;
  const denominator = 3;

  // Act
  const result = isProperFraction(numerator, denominator);

  // Assert
  expect(result).toBe(false);
});





