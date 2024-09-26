// There is an implementation of format-as-12-hours.js in the debug directory
// Copy that implementation in here, and improve it:
// That implementation currently uses the expression Number(time.slice(0, 2)) twice
// Store this expression in a variable and reference it twice in the function in the correct place

// Explain why it makes more sense to store this expression in a variable

// Given code in the file in debug folder:

// function formatAs12HourClock(time) {
//   if (Number(time.slice(0, 2)) > 12) {
//     return `${Number(time.slice(0, 2)) - 12}:00 pm`;
//   }
//   return `${time} am`;
// }

// const currentOutput = formatAs12HourClock("08:00");
// const targetOutput = "08:00 am";
// console.assert(
//   currentOutput === targetOutput,
//   "current output: %s, target output: %s",
//   currentOutput,
//   targetOutput
// );

// const currentOutput2 = formatAs12HourClock("23:00");
// const targetOutput2 = "11:00 pm";
// console.assert(
//   currentOutput2 === targetOutput2,
//   "current output: %s, target output: %s",
//   currentOutput2,
//   targetOutput2
// );

// Improved and fixed version of it:

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = Number(time.slice(3));

  if (hours >= 12) {
    const formattedHoursAfternoon =
      hours === 12 ? hours : hours - 12 < 10 ? `0${hours - 12}` : hours - 12;
    const formattedMinutesAfternoon = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHoursAfternoon}:${formattedMinutesAfternoon} pm`;
  } else {
    const formattedHoursMorning =
      hours === 0 ? hours : hours < 10 ? `0${hours}` : hours;
    const formattedMinutesMorning = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHoursMorning}:${formattedMinutesMorning} am`;
  }
}

// Explanation:

// * USE OF VARIABLES: The introduction of hours and minutes variables makes the code more readable,
// and the variable names clearly convey their purpose.

// * TERNARY OPERATOR: The use of ternary operators for conditional expressions,
// simplifies the logic and reduces the need for nested if statements.

// * CONSISTENT FORMATTING: The consistent formatting of hours and minutes with leading zeros ensures that the output follows a standard format.

// * CLARITY IN LOGIC: The logic for handling afternoon and morning hours is clear and concise.
