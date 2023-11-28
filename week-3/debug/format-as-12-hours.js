/*function formatAs12HourClock(time) {
  if (Number(time.slice(0, 2)) > 12) {
    return `${Number(time.slice(0, 2)) - 12}:00 pm`;
  }
  return `${time} am`;
}
*/

// a) Write an assertion to check the return value of formatAs12HourClock when it is called with an input "17:42"
// b) Check the assertion output and explain what the bug is
// c) Now fix the bug and re-run all your assertions

function formatAs12HourClock(time) {
  const [hours, minutes] = time.split(":");

  if (Number(hours) > 12) {
    return `${Number(hours) - 12}:${minutes} pm`;
  }

  return `${hours}:${minutes} am`;
}

const currentOutput = formatAs12HourClock("09:00");
const targetOutput = "09:00 am";

console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);

const currentOutput3 = formatAs12HourClock("17:42");
const targetOutput3 = "5:42 pm";

console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output: %s",
  currentOutput3,
  targetOutput3
);

// The bug lies in the logic within the formatAs12HourClock function. When the time input is greater than 12 hours, it subtracts 12 from the hours to convert it to the 12-hour format. However, it always sets the minutes part to ":00" and adds "pm" or "am" based on the condition. So, for "17:42", it returns "5:00 pm" instead of "5:42 pm". We need to fix it by modifying the function to include the minutes  when the hour is greater than 12.
