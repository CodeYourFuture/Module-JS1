// There is an implementation of format-as-12-hours.js in the debug directory
// This implementation currently uses the expression Number(time.slice(0, 2)) twice
// Store this expression in a variable and reference it twice in the function in the correct place

// Explain why it makes more sense to store this expression in a variable

// It allows for cleaner looking code, and easier readability.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = Number(time.slice(3, 5));
  if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  } else {
    return `${time} am`;
  }
}
