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
// I ran the program. It works fine.

// b) When formatTimeDisplay is called how many times will pad be called?
// The function, pad, will be called 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// c) What is the value assigned to num when pad is called for the first time?
// The first time pad is called, num will be the remainingHours and value is 0, and it will return 00.

// d) What is the return value of pad is called for the first time?
// The return value will be 00.

// e) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// The last time pad is called, it is called on remainingSeconds and the value is 1.

// f) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// When pad is called for the last time, the assigned value is 1 and the return value is 01.
// To explain further, 01 is returned because pad has been defined to return exactly two characters such that if
// the value passed is already two digits, the 2 digits are returned. If one digit is passed, 0 is added to the left-side.
