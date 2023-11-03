function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;
  const remainingHours = totalHours % 24;

  return `${pad(remainingHours)}:${pad(remainingMinutes)}:${pad(
    remainingSeconds
  )}`;
}

console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions
// how this could help if I'm doing JS not a python

// Questions

// a) Run this program with node, identify the line the error is thrown. Explain why this error is occurring. How can you fix this error?
// there is no errors if i run this code with node as this code calculates seconds to a time format.

// b) When formatTimeDisplay is called how many times will pad be called?
// The `pad` function is called three times when `formatTimeDisplay` is called.

// Call formatTimeDisplay with an input of 61, now answer the following:

// c) What is the value assigned to num when pad is called for the first time?
/*
When `pad` is called for the first time, the value assigned to `num` is `0`. This is because 
it's used to pad the hours, and for 61 seconds, the total hours is 0.
*/

// d) What is the return value of pad is called for the first time?
// The return value of the first call to `pad` is `'00'`.

// e) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
/*
 When `pad` is called for the last time in this program, the value assigned to `num` is `1`. 
 This is because it's used to pad the seconds, and the remaining seconds after converting 61 seconds 
 into hours and minutes is 1 second.
*/

// f) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
/*
The return value assigned to `num` when `pad` is called for the last time is `'01'`. 
This is because it pads the seconds with a '0' to maintain a two-digit format, and the remaining seconds 
are 1, so it becomes '01'.
*/
