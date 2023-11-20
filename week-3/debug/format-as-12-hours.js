function formatAs12HourClock(time) {
  if (Number(time.slice(0, 2)) > 12) {
    //return `${Number(time.slice(0, 2)) - 12}:00 pm`;
    return `${Number(time.slice(0, 2)) - 12}:${time.slice(3)} pm`;
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

console.log(formatAs12HourClock("17:42"));

// formatAs12HourClock currently has a 🐛

// a) Write an assertion to check the return value of formatAs12HourClock when it is called with an input "17:42"
// b) Check the assertion output and explain what the bug is
//Answer: the bug is the function can't show the minutes when you add the time "17:42" because the minutes are a string showing 00.
// c) Now fix the bug and re-run all your assertions
