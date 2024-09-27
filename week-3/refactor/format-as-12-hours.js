// There is an implementation of format-as-12-hours.js in the debug directory
// Copy that implementation in here, and improve it:
// That implementation currently uses the expression Number(time.slice(0, 2)) twice
// Store this expression in a variable and reference it twice in the function in the correct place

function formatAs12HourClock(time) {
  if (Number(time.slice(0, 2)) > 12) {
    const HoursInput = Number(time.slice(0, 2));
    const MinutesInput = Number(time.slice(3, 5));
    return `${HoursInput - 12}:${MinutesInput} pm`;
  }
  return `${time} am`;
}

// Explain why it makes more sense to store this expression in a variable
// This function is more readable and this Number(time.slice(3, 5)) code is reusable.
