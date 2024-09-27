// function pad(num) {
//   if (num < 10) {
//     return `0${num}`;
//   }
//   return num;
// }

function pad(num){
  return num.toString().padStart(2,'0');
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

//* 3 times 
// pad(remainingHours)
// pad(remainingMinutes)
// pad(remainingSeconds)

// Call formatTimeDisplay with an input of 143, now answer the following:

//* 00:02:23

// b) What value is assigned to the parameter num when pad is called for the first time?

//* parameter is remainingHours

// c) What is the return value of pad when it is called for the first time?

//* the return value of the first call to pad is '00'

// d) What is the value assigned to the parameter num when pad

// is called for the last time in this program?  Explain your answer

//* when pad is called for the last time in this program, the value assigned to the parameter num is 23 (the value of remainingSeconds)

// e) What is the return value when pad is called
// for the last time in this program?  Explain your answer

// 23 because it is > 0 return is just num= > 23 

// f) Research an alternative way of padding the numbers in this code.
// Look up the string functions on mdn

//*String.prototype.padStart() method. 
// This method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.

// function pad(num){
//   return num.toString().padStart(2,'0');
// }