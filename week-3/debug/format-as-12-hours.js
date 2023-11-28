function formatAs12HourClock(time) {
  if (Number(time.slice(0, 2)) > 12) {
    return `${(Number(time.slice(0, 2)) - 12)
      .toString()
      .padStart(2, "0")}:${time.slice(time.indexOf(":") + 1)} pm`;
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
  `${currentOutput3} and ${targetOutput3}`
);

// b) Check the assertion output and explain what the bug is

//because minute is not passed to return value

// c) Now fix the bug and re-run all your assertions
