function formatAs12HourClock(time) {
  if (Number(time.slice(0, 2)) > 12) {
    return `${Number(time.slice(0, 2)) - 12}:00 pm`;
  }
  return `${time} am`;
}
// if the hour portion of the time (08:)is greater than 12
// it subtracts 12 from the hour to convert it to a 12-hour format, and adds pm
// Otherwise, it keeps the time as it is and appends "am".

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";

console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  "current output: %s, target output: %s",
  currentOutput2,
  targetOutput2
);

// a) Write an assertion to check the return value of formatAs12HourClock when it is called with an input "17:42"
// b) Check the assertion output and explain what the bug is
// c) Now fix the bug and re-run all your assertions

/* When I tested the function with the time '17:42', it didn't give the right output. The function should have shown '5:42 pm', but it displayed '5:00 pm'. The bug was that it didn't handle the minutes correctly for times after noon. 
For the input "17:42", the hour portion (17) is greater than 12.
The function should return 17 - 12 = 5:00 pm. */

// Assertion for Input "17:42":
const currentOutput3 = formatAs12HourClock("17:42");
const targetOutput3 = "5:42 pm";

console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output: %s",
  currentOutput3,
  targetOutput3
);
// The bug lies in returning ":00" for minutes regardless of the input minutes. To fix this, let's include the minutes part as well.
function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3);

  if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  }

  return `${time} am`;
}
