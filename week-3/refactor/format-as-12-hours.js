// There is an implementation of format-as-12-hours.js in the debug directory
// This implementation currently uses the expression Number(time.slice(0, 2)) twice
// Store this expression in a variable and reference it twice in the function in the correct place

function formatAs12HourClock(time) {
  const timeSlice = Number(time.slice(0, 2));
  if (timeSlice > 12) {
    return `${timeSlice - 12}:${time.slice(3)} pm`;
  }
  return `${time} am`;
}

// Explain why it makes more sense to store this expression in a variable
//answer: It makes the code neat.