// There is an implementation of format-as-12-hours.js in the debug directory
// This implementation currently uses the expression Number(time.slice(0, 2)) twice
// Store this expression in a variable and reference it twice in the function in the correct place

function formatAs12HourClock(time) {
    const hour = Number(time.slice(0,2));
    if (hour > 12) {
    return `${hour - 12}:${time.slice(3)} pm`;
  }
  return `${time} am`;
}
// test the function
console.log(formatAs12HourClock("17:52"));


// Explain why it makes more sense to store this expression in a variable
// 1. It makes the code neater
// 2. It limits potential of errors (especially syntax errors). There's more chance of mistyping a character when it is not stored as a variable.
// 3. It makes code review easy for Reviewers, others and future-self.
