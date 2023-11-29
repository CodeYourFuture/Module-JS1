function formatAs12HourClock(time) {
  if (Number(time.slice(0, 2)) > 12) {
    return `${Number(time.slice(0, 2)) - 12}:${time.slice(3,5)} pm`;
  }
  else{
  return `${time} am`;}
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
const currentOutput3 = formatAs12HourClock("17:42");
const targetOutput3 = "5:42 pm";
console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output: %s",
  currentOutput3,
  targetOutput3
);

// formatAs12HourClock currently has a 🐛

// a) Write an assertion to check the return value of formatAs12HourClock when it is called with an input "17:42"
// b) Check the assertion output and explain what the bug is.
// Answer
//  In function formatAs12HourClock the code uses .slice(0,2) to get the value of hours only. It ignores the minuets.
  // And in 17:42 we have minutes and the answer we expected to be is 5:42 pm but the code give us 5:00 pm.
// c) Now fix the bug and re-run all your assertions
