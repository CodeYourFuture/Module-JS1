function formatAs12HourClock(time) {
  const hoursInNumber = Number(time.slice(0, 2));
  if (hoursInNumber > 12) {
    const hoursIn12hFormat = hoursInNumber - 12;
    return `${hoursIn12hFormat.toString().padStart(2, "0")}:${time.slice(
      -2
    )} pm`;
  }
  return `${time} am`;
}

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

// formatAs12HourClock currently has a 🐛

// a) Write an assertion to check the return value of formatAs12HourClock when it is called with an input "17:42"
const currentOutput3 = formatAs12HourClock("17:42");
const targetOutput3 = "05:42 pm";
console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output: %s",
  currentOutput3,
  targetOutput3
);
// b) Check the assertion output and explain what the bug is
  // When the time is bigger than 12 the function ignores the minutes and return
  // 00 hardcoded. When we try to solve, we need to use padStart to force two digits.
  // But, padStart is a method for strings and doesn't work with numbers. So, we have to
  // convert the number to a string to execute the padStart.
// c) Now fix the bug and re-run all your assertions
