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
const result = formatAs12HourClock("17:42");
asserts.strictEqual(result, "5:42 pm", "conversion to 12-hour clock is incorrect");


// a) Write an assertion to check the return value of formatAs12HourClock when it is called with an input "17:42"

const result = formatAs12HourClock("17:42");
console.assert(
  result === "5:42 pm",
  "Conversion to 12-hour clock is incorrect"
);



// b) Check the assertion output and explain what the bug is
The bug is in the formatAs12HourClock function. 
It seems that the minutes are not being considered, and the function always 
returns ":00 pm" or ":00 am".
  Additionally, it doesn't handle noon and midnight correctly.




// c) Now fix the bug and re-run all your assertions

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3);
  const period = hours >= 12 ? "pm" : "am";
  const formattedHours = hours % 12 || 12; // Handle 12:00 as 12 pm

  return `${formattedHours}:${minutes} ${period}`;
}

// Re-run assertions

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "8:00 am";
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

const result = formatAs12HourClock("17:42");
console.assert(
  result === "5:42 pm",
  "Conversion to 12-hour clock is incorrect"
);
