function formatAs12HourClock(time) {
  if (Number(time.slice(0, 2)) > 12) {
    let timeFormat = (Number(time.slice(0, 2)) - 12)
    if (timeFormat <10 )
    return `0${timeFormat}:${time.slice(3, 5)} pm`;
  else 
  return`${timeFormat}:${time.slice(3, 5)} pm`;
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

const currentOutput1 = formatAs12HourClock("17:42");
const targetOutput1 = "05:42 pm"
console.assert(
  currentOutput1 === targetOutput1,
  `current output: %s, target output: %s`, currentOutput1, targetOutput1
)

// formatAs12HourClock currently has a 🐛

// a) Write an assertion to check the return value of formatAs12HourClock when it is called with an input "17:42"
// b) Check the assertion output and explain what the bug is
// Ans. The problem is that the hours are being calculated fine but minutes are not being considered as we don't have a calculation for minutes 
// c) Now fix the bug and re-run all your assertions
// Ans. Replaced 00 in line 3 with ${time.slice(3,5)} to return the minutes part back,
