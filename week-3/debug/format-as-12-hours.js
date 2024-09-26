// function formatAs12HourClock(time) {
//   if (Number(time.slice(0, 2)) > 12) {
//     return `${Number(time.slice(0, 2)) - 12}:${Number(time.slice(3))} pm`;
//   }
//   return `${time} am`;
// }

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = Number(time.slice(3));

  if (hours >= 12) {
    const formattedHoursAfternoon =
      hours === 12 ? hours : hours - 12 < 10 ? `0${hours - 12}` : hours - 12;
    const formattedMinutesAfternoon = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHoursAfternoon}:${formattedMinutesAfternoon} pm`;
  }

  const formattedHoursMorning =
    hours === 0 ? hours : hours < 10 ? `0${hours}` : hours;
  const formattedMinutesMorning = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHoursMorning}:${formattedMinutesMorning} am`;
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

const currentOutput3 = formatAs12HourClock("17:42");
const targetOutput3 = "05:42 pm";

console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output: %s",
  currentOutput3,
  targetOutput3
);

// Answer:

// b) When the hours part are greater than 12, the function adds "00" to show the minutes part which is not correct.
// Also the function does not appropriately work to display the four digit number formatting

const currentOutput4 = formatAs12HourClock("00:00");
const targetOutput4 = "00:00 am";

console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output: %s",
  currentOutput3,
  targetOutput3
);

const currentOutput5 = formatAs12HourClock("01:02");
const targetOutput5 = "01:02 am";

console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output: %s",
  currentOutput3,
  targetOutput3
);

const currentOutput6 = formatAs12HourClock("23:23");
const targetOutput6 = "11:23 pm";

console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output: %s",
  currentOutput3,
  targetOutput3
);
