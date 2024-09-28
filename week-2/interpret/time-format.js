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

// Call formatTimeDisplay with an input of 143, now answer the following:

// b) What value is assigned to the parameter num when pad is called for the first time?

// c) What is the return value of pad when it is called for the first time?

// d) What is the value assigned to the parameter num when pad
// is called for the last time in this program?  Explain your answer

// e) What is the return value when pad is called
// for the last time in this program?  Explain your answer

// f) Research an alternative way of padding the numbers in this code.
// Look up the string functions on mdn

// Answers:

// a) 3 times

// b) The value assigned to the parameter num for the first time is the same as the value of variable remainingHours which is 0 in this case.

// c) It is 0 with a 0 at the beginning which will be 00

// d) The value assigned to the parameter num for the last time is the same as the value of the variable remainingSeconds which is 23(143-120).

// e) The return value is the same as the value of the variable remainingSecond because 23 is grater than or equal to 10, so no padding needed.

// f) We can convert the number data type to a string data type using string function
// and then using .padStart() method to ensure the result has the needed character length (which is at least 2 in this case) and if not adds a padding with what we need (which is 0 in this case).
// return string(num).padStart(2, '0');
