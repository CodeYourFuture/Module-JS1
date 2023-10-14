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

// Questions

// a) Run this program with node, identify the line the error is thrown. Explain why this error is occurring. How can you fix this error?
The error is thrown on line 10, where we call pad(remainingHours). 
The error message is "TypeError: num.toString(...).padStart is not a function".
 This error occurs because padStart is a method of the String object in JavaScript, but num.
 toString() returns a number, not a string. To fix this error,
 we can convert the number to a string using the String() function before calling padStart.
// b) When formatTimeDisplay is called how many times will pad be called?
When formatTimeDisplay is called, pad will be called three times.
// Call formatTimeDisplay with an input of 61, now answer the following:

// c) What is the value assigned to num when pad is called for the first time?
The value assigned to num when pad is called for the first time is 0.
// d) What is the return value of pad is called for the first time?
The return value of pad is called for the first time is "00".
// e) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
The value assigned to num when pad is called for the last time in this program is 1.
// f) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
The return value assigned to num when pad is called for the last time in this program is "01".

function pad(num) {
  return String(num).padStart(2, "0");
 }
 