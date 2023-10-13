function formatAs12HourClock(time) {
  if (Number(time.slice(0, 2)) > 12) {
    return `${Number(time.slice(0, 2)) - 12}:${Number(time.slice(3,5))} pm`;
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

const currentOutput1 = formatAs12HourClock("23:00");
const targetOutput1 = "11:00 am";
console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);
// formatAs12HourClock currently has a 🐛
// a) Write an assertion to check the return value of formatAs12HourClock when it is called with an input "17:42"
const currentOutput3=formatAs12HourClock("17:52")
const targetOutput3="5:52 pm";
console.assert(currentOutput3 === targetOutput3, "current output: %s, target output: %s", currentOutput3, targetOutput3);

// b) Check the assertion output and explain what the bug is
//    It has converted the hours into 12 hours format but it not returning the numbers of minutes which makes tha currentOutput3 and the targetOutput3 unequal causing the assertion failed error.
// c) Now fix the bug and re-run all your assertions



