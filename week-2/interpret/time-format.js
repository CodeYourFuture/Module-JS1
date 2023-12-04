function pad(num) {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
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

console.log(formatTimeDisplay(143));
console.log(formatTimeDisplay(246));

// You can play computer with this example
// Use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

/* a) When formatTimeDisplay is called, how many times will pad be called?

In this scenario, the pad function will be called three times since there are three instances of pad within the formatTimeDisplay function: once each for hours, minutes, and seconds.
  b)  What value is assigned to the parameter num when pad is called for the first time?

When pad is called for the first time within formatTimeDisplay, it will be called with the value of remainingHours, which is derived from the calculations in the function.
  c) What is the return value of pad when it is called for the first time?

The pad function adds a leading zero to numbers less than 10. In this case, when called with remainingHours, if the value is less than 10, it will prepend a zero to the number and return a string with the leading zero and the value.
  d) What is the value assigned to the parameter num when pad is called for the last time in this program? Explain your answer.

The last call to pad is for remainingSeconds, which has the value derived from the input argument of formatTimeDisplay(143). Therefore, the value of num when pad is called for the last time will be 3 (as 143 % 60 equals 3).
  e) What is the return value when pad is called for the last time in this program? Explain your answer.

The pad function will return the string '03' because remainingSeconds is 3, which is less than 10, so the function adds a leading zero to meet the formatting criteria.

// f) Research an alternative way of padding the numbers in this code.
// Look up the string functions on mdn.*/
