function formatAs12HourClock(time) {
  if (Number(time.slice(0, 2)) > 12) {
          let timeFormat= (Number(time.slice(0, 2)) - 12) < 10
    if (timeFormat){
      return `0${(Number(time.slice(0, 2)) - 12)}:${(time.slice(3, 5))} pm`;
    }
    return `${(Number(time.slice(0, 2)) - 12)}:${(time.slice(3, 5))} pm`;
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
  "current output: %s target output: %s",
  currentOutput2,
  targetOutput2
);


const currentOutput3 = formatAs12HourClock("17:42");
const targetOutput3 = "05:42 pm";
console.assert ( currentOutput3 === targetOutput3,
    `Current output: ${currentOutput3}, target output ${targetOutput3}`
    );

// formatAs12HourClock currently has a 🐛

// a) Write an assertion to check the return value of formatAs12HourClock when it is called with an input "17:42"
// b) Check the assertion output and explain what the bug is
// c) Now fix the bug and re-run all your assertions

