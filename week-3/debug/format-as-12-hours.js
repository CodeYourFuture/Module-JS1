function formatAs12HourClock(time) {
  let sliceStorage = Number(time.slice(0, 2)) > 12;
  let calculateTime = `${Number(time.slice(0, 2)) - 12}`;
  if (sliceStorage) {
    return `${calculateTime}:00 pm`;
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

const currentOutput3 = formatAs12HourClock("17:42");
const targetOutput3 = "07:00 pm";
console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output: %s",
  currentOutput2,
  targetOutput2
);

// formatAs12HourClock currently has a 🐛

// a) Write an assertion to check the return value of formatAs12HourClock when it is called with an input "17:42"
// const result = formatAs12HourClock("17:42");
// console.log(result); // Output should be "5:42 pm"
//The assert() method tests if a given expression is true or not.

// b) Check the assertion output and explain what the bug is
//To fix this bug, you should modify the code to check if the hours are greater than or equal to 12 (12 or greater) instead of just greater than 12. This change ensures that "12:00" is correctly interpreted as noon.
// With this fix, the function will now produce the expected output of "12:00 pm" when the input is "12:00."

// c) Now fix the bug and re-run all your assertions

// // Exercise 1
// // line o1
// const check = true === false;
// console.log(check);

// //line 2
// const check1 = 5 == 2 + 4;
// console.log(check1);

// //line 3
// const check2 = 4 * 5 == "20";
// console.log(check2);

// //line 4
// const check4 = 3 * 2 === 6;
// console.log(check4);

// // line 5
// const check5 = Math.min(3, 4, 5) === 4;
// console.log(check5);

// // line 6
// let mhairiName = "Mahiri";
// typeof mhairiName === "string";
// console.log(mhairiName);

// let mhairiAge = 28;
// console.log(mhairiAge);

// let isMhairiOldEnoughToDrive = true;
// console.log(isMhairiOldEnoughToDrive);

// let kilometersMhairiDrivesToWork = 9.4;
// console.log(kilometersMhairiDrivesToWork);

// const calculation = 10 + 32;
// const result = 40;
// //console.assert(calculation === result);

// function formatAs12HourClock(time) {
//   return `${time} am`;
// }

// const currentOutput = formatAs12HourClock("08:00");
// const targetOutput = "08:00 am";

// console.assert(
//   currentOutput === targetOutput,
//   "current function output: %s, target output: %s",
//   currentOutput,
//   targetOutput
// );

// const currentOutput2 = formatAs12HourClock("23:00");
// const targetOutput2 = "11:00 am";
// console.assert(
//   currentOutput2 === targetOutput2,
//   "current output: %s, target output: %s",
//   currentOutput2,
//   targetOutput2
// );
