function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;
  const remainingHours = totalHours % 24;

  console.log(remainingHours, remainingSeconds, totalHours);

  return `${pad(remainingHours)}:${pad(remainingMinutes)}:${pad(
    remainingSeconds
  )}`;
}

console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) Run this program with node, identify the line the error is thrown. Explain why this error is occurring. How can you fix this error?
// There is no errors?

// b) When formatTimeDisplay is called how many times will pad be called?
// 3 times

// Call formatTimeDisplay with an input of 61, now answer the following:

// c) What is the value assigned to num when pad is called for the first time?
// remainingHours

// d) What is the return value of pad is called for the first time?
// 0

// e) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// remainingSeconds - Because once the variables have been defined inside of the function, there must be a return output,
// So for example - The variable and code you'd like the execute will be the input, and the return will be the output.
// Pad is called inside of the return line on line 12, and the last variable it asks to call is remainingSeconds.

// f) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// 1 - Because seconds % 60 is a modulo calculation. The seconds is the dividend and the 60 is the divisor. When this sum
// is calculated it equals 1.
