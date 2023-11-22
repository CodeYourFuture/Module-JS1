function formatAs12HourClock(time) {
  if (Number(time.slice(0, 2)) > 12) {
    return `${Number(time.slice(0, 2)) - 12}:00 pm`;
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
// b) Check the assertion output and explain what the bug is
// c) Now fix the bug and re-run all your assertions

//..........................................................

//ANSWER

// a) Writing the assertion: 
const currentOutput3 = formatAs12HourClock("17:42");
const targetOutput3 = "5:42 pm";
console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output: %s",
  currentOutput3,
  targetOutput3
);


// b)  The bug is: when the hour is greater than 12 it gives a wrong answer.
//      for example When the input time is "17:42," it takes away 12 from the hour and returns "5:00 pm"
//        instead of "5:42 pm."

// c) fixing the bug 


// First wee need to format time in 12-hour clock
function formatAs12HourClock(time) {
  // second we need to Extract hour and minute from the time
  const hour = Number(time.slice(0, 2));
  const minute = time.slice(3);

  // Then we need to check if the hour is greater than 12
  if (hour > 12) {
    // in that case we will take away 12 from the hour and add "pm"
    return `${hour - 12}:${minute} pm`;
  } else {
    // otherwise we will keep the hour as is and add "am"
    return `${hour}:${minute} am`;
  }
}











