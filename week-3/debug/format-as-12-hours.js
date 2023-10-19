// function formatAs12HourClock(time) {
//   if (Number(time.slice(0, 2)) > 12) {
//     return `${Number(time.slice(0, 2)) - 12}:00 pm`;
//   }
//   return `${time} am`;
// }

function formatAs12HourClock(time) {
  let hours = time.slice(0, 2);
  let hoursInNumber = Number(hours);
  let hoursCalculation = hoursInNumber - 12;
  let hoursInString = String(hoursCalculation);
  let finalHours = hoursInString.padStart(2, 0);
  let minutes = (time.slice(3));
  
  if (hoursInNumber > 12) {
    return `${finalHours}:${minutes} pm`;
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
const currentOutput3 = formatAs12HourClock("17:42");
const targetOutput3 = "05:42 pm";
console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output: %s",
  currentOutput3,
  targetOutput3
);
// b) Check the assertion output and explain what the bug is
//The current output is "5:00 pm" while target output is supposed to be "05:42 pm"

// c) Now fix the bug and re-run all your assertions

