// There is an implementation of format-as-12-hours.js in the debug directory
// Copy that implementation in here, and improve it:
// That implementation currently uses the expression Number(time.slice(0, 2)) twice
// Store this expression in a variable and reference it twice in the function in the correct place

// Explain why it makes more sense to store this expression in a variable
function formatAs12HourClock(time) {
    const analog = Number(time.slice(0, 2))
    if (analog > 12) {
      return `${analog - 12}:00 pm`;
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
  console.assert(formatAs12HourClock("17:42"))