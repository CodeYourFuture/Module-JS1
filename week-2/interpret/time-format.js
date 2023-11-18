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

// You can play computer with this example
// Use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// Pad will be called 3 times, 1 for hours, 1, for minutes and 1 for seconds.

// Call formatTimeDisplay with an input of 143, now answer the following:

// b) What value is assigned to the parameter num when pad is called for the first time?
//the vaule is 0.

// c) What is the return value of pad when it is called for the first time?
// the value is 00.
// d) What is the value assigned to the parameter num when pad
// is called for the last time in this program?  Explain your answer
// When we call last time return 23.
// e) What is the return value when pad is called
// for the last time in this program?  Explain your answer
// the value is 23, because 23 has 2 digit so it is greater than 10 so it will print.
// f) Research an alternative way of padding the numbers in this code.
// Look up the string functions on mdn
// function pad(num){
// return String(num).padStart(2, "0");
//}
