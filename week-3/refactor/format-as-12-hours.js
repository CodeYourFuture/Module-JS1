// There is an implementation of format-as-12-hours.js in the debug directory
// Copy that implementation in here, and improve it:
// That implementation currently uses the expression Number(time.slice(0, 2)) twice
// Store this expression in a variable and reference it twice in the function in the correct place

// Explain why it makes more sense to store this expression in a variable

//Answer: to make code more efficient, readable, not repeating and also memory optimization which means storing the expression in a variable can potentially improve memory usage by avoiding unnecessary recalculations.

function formatAs12HourClock(time) {
      let hoursIn12Format = Number(time.slice(0, 2));
      let timeMinutes = (time.slice(3, 5));
  if (hoursIn12Format > 12) {
    if ((hoursIn12Format - 12) < 10){
      return `0${(hoursIn12Format - 12)}:${timeMinutes} pm`;
    }
    return `${(hoursIn12Format - 12)}:${timeMinutes} pm`;
  }
  return `${time} am`;
}

console.log (formatAs12HourClock("23:52"));
console.log (formatAs12HourClock("19:52"));