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
//

// Questions

// a) Run this program with node, identify the line the error is thrown. Explain why this error is occurring. How can you fix this error?
// I checked the program through Visualiser https://pythontutor.com/visualize.html#mode=editline, line 1 SyntaxError: invalid syntax, but our program has written in JS Which is fine and do not have error.

// b) When formatTimeDisplay is called how many times will pad be called?
// we called it 3 times on 12.

// Call formatTimeDisplay with an input of 61, now answer the following:

// c) What is the value assigned to num when pad is called for the first time?
// pad(remainingHours)

// d) What is the return value of pad is called for the first time?
//When the pad function is called for the first time with pad(remainingHours), the return value will depend on the value of remainingHours
// in this case return value is 0

// e) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// remainingSeconds will be the value assigned to num. In this case, for formatTimeDisplay(61),
//remainingSeconds is calculated as 61 % 60,(modulo) which results in 1. So, the value assigned to num when pad is called for the last time in the program is 1.

// f) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// The last call to pad occurs with remainingSeconds. If formatTimeDisplay(61) is used, remainingSeconds equals 1, so num is assigned the value of 1.
