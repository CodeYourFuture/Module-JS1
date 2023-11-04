function formatAs12HourClock(time) {
  if (Number(time.slice(0, 2)) > 12) {
    return `${Number(time.slice(0, 2)) - 12}:${time.slice(3)} pm`;
  }
  return `${time} am`;
}




const currentOutput = formatAs12HourClock("06:32");
const targetOutput = "06:32 am";
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
const targetOutput3 = "5:42 pm";
console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output: %s",
  currentOutput3,
  targetOutput3
);

// b) Check the assertion output and explain what the bug is
/* the condition of the function only handles the hours not the minutes it removes any minutes as it is set to 00
   and only outputs the hours, if we remove the minutes out of the input 17:42 and use input 17:00 there is no issue.
   and a note in this code if we input as targetOutput 05:42 pm we get Assertion failed we should always #
   remove the 0 at the beginning of pm format and no issue in the am format we can do 7:11 or 07:11.
   and the currentOutput and the targetOutput must be with the same time format 
   */ 
// c) Now fix the bug and re-run all your assertions
