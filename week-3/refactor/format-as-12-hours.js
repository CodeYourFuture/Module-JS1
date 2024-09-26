// There is an implementation of format-as-12-hours.js in the debug directory
// Copy that implementation in here, and improve it:
// That implementation currently uses the expression Number(time.slice(0, 2)) twice
// Store this expression in a variable and reference it twice in the function in the correct place

// Explain why it makes more sense to store this expression in a variable
// I already stored it in a variable in first problem because we are using same thing twice which can make code look 
// confusing and by storing it in variable it makes things easier for someone unfamiliar with code to understand.
function formatAs12HourClock(time) {
  if (Number(time.slice(0, 2)) > 12) {
    let timeFormat = Number(time.slice(0, 2)) - 12;
    if (timeFormat < 10) return `0${timeFormat}:${time.slice(3, 5)} pm`;
    else return `${timeFormat}:${time.slice(3, 5)} pm`;
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
const targetOutput1 = "05:42 pm";
console.assert(
  currentOutput1 === targetOutput1,
  `current output: %s, target output: %s`,
  currentOutput1,
  targetOutput1
);