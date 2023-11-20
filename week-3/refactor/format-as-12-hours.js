// There is an implementation of format-as-12-hours.js in the debug directory
// Copy that implementation in here, and improve it:
// That implementation currently uses the expression Number(time.slice(0, 2)) twice
// Store this expression in a variable and reference it twice in the function in the correct place

// Explain why it makes more sense to store this expression in a variable
// Actually, I've already implemented this in the original format-as-12-hours.js file.
// For improved code readability and maintainability, it is a good approach to avoid duplicating the same code.
// If the same logic needs to be reused, it is a better practice to store the code in a variable and reference it when necessary.

function formatAs12HourClock(time) {
  const hoursInNumber = Number(time.slice(0, 2));
  if (hoursInNumber > 12) {
    const hoursIn12hFormat = hoursInNumber - 12;
    return `${hoursIn12hFormat.toString().padStart(2, "0")}:${time.slice(
      -2
    )} pm`;
  }
  return `${time} am`;
}

function assertion(hour, targetOutput) {
  const currentOutput = formatAs12HourClock(hour);
  console.assert(
    currentOutput === targetOutput,
    `Test for ${hour}. Current output: %s, target output: %s`,
    currentOutput,
    targetOutput
  );
}

assertion("08:00", "08:00 am");
assertion("23:00", "11:00 pm");
assertion("17:42", "05:42 pm");