// There is an implementation of format-as-12-hours.js in the debug directory
// Copy that implementation in here, and improve it:
// That implementation currently uses the expression Number(time.slice(0, 2)) twice
// Store this expression in a variable and reference it twice in the function in the correct place

//ans :I should not use (0, 2) twice in function because it will change the value of minute and turn 5 : 17
//as i want my output 5 : 45; 


// Explain why it makes more sense to store this expression in a variable
//ans : Store this expression in a variable revised code considers both the hours and minutes in the input time, correctly determines whether it's morning or afternoon.


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
