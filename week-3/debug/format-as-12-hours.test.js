const formatAs12HourClock = require('./format-as-12-hours');


test('current output equals target output', () => {
  // Call the function with a specific time
  const result = formatAs12HourClock('17:42');

  // Use the expect function to check if the result matches the expected output
  expect(result).toBe('5:42 pm');
});