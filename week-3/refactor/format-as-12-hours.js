// There is an implementation of format-as-12-hours.js in the debug directory
// This implementation currently uses the expression Number(time.slice(0, 2)) twice
// Store this expression in a variable and reference it twice in the function in the correct place

// Explain why it makes more sense to store this expression in a variable
/*
Storing the expression Number(time.slice(0, 2)) in a variable makes code easier to read and maintain. 
Instead of repeating it, we give it a name and use that name throughout the code. 
This improves understanding, reduces mistakes, and makes future changes simpler. 
*/
function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = Number(time.slice(3));

  if (hours >= 24 || minutes >= 60) {
    return `${time} it's not within the usual time frame`;
  }

  if (hours === 12) {
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes} PM`;
  }

  if (hours > 12) {
    return `${hours - 12}:${minutes < 10 ? "0" : ""}${minutes} PM`;
  }
  return `${hours}:${minutes < 10 ? "0" : ""}${minutes} AM`;
}
console.log(formatAs12HourClock("12:9"));
