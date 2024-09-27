
function formatAs12HourClock(time) {
  // if (Number(time.slice(0, 2)) > 12) {
  //   return `${Number(time.slice(0, 2)) - 12}:00 pm`;
  // }
  // return `${time} am`;
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);
  
  if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  }

  // Handle noon (12:00) separately to avoid displaying "0:00 pm"
  if (hours === 12) {
    return `12:${minutes} pm`;
  }

  return `${hours}:${minutes} am`;

}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);

// const currentOutput2 = formatAs12HourClock("23:00");
// const targetOutput2 = "11:00 pm";
const currentOutput2 = formatAs12HourClock("17:42");
const targetOutput2 = "5:42 pm";
console.assert(
  currentOutput2 === targetOutput2,
  "current output: %s, target output: %s",
  currentOutput2,
  targetOutput2
);

module.exports = formatAs12HourClock;

// formatAs12HourClock currently has a 🐛

// a) Write an assertion to check the return value of formatAs12HourClock when it is called with an input "17:42"
// b) Check the assertion output and explain what the bug is
//Ans:The bug in the code is that the test expects the function formatAs12HourClock to
// return "5:42 pm" for the input time "17:00," but the actual result is "5:00 pm." 
//The bug likely lies in the logic of the formatAs12HourClock function, 
//where the conversion to a 12-hour clock is not producing the expected output.

// c) Now fix the bug and re-run all your assertions
