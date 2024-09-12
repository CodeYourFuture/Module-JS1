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

// a) When formatTimeDisplay is called how many times will pad be called? - 3 times

// Call formatTimeDisplay with an input of 143, now answer the following:

// b) What value is assigned to the parameter num when pad is called for the first time? - remainingHours

// c) What is the return value of pad when it is called for the first time? - 00

// d) What is the value assigned to the parameter num when pad
// is called for the last time in this program?  Explain your answer - 23 becasue in the function formatTimeDisplay the last pad for return is remainingSeconds which has a value of 23 

// e) What is the return value when pad is called
// for the last time in this program?  Explain your answer - 23 because it is already two digits which is the max and hence it won't add a 0 infront to make two digits 

// f) Research an alternative way of padding the numbers in this code.
// Look up the string functions on mdn - use String.prototype.padStart() to pad 0 at the beginning 
// The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of this string.
