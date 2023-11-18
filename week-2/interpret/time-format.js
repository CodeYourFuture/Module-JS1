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
//ans 3 times;
// Call formatTimeDisplay with an input of 143, now answer the following:


// b) What value is assigned to the parameter num when pad is called for the first time?
//ans; 0
// c) What is the return value of pad when it is called for the first time?
//ans: 00
// d) What is the value assigned to the parameter num when pad
// is called for the last time in this program?  Explain your answer
//ans: So when we call last time ${pad(remainingSeconds)) return 23.


// e) What is the return value when pad is called
// for the last time in this program?  Explain your answer
//ans: So when we call ${pad(remainingSeconds)) it will go back to function pad(num) and compare the out (23). if 23 < 10 will return 0 23 else return 23.


// f) Research an alternative way of padding the numbers in this code.
// Look up the string functions on mdn


//function pad(num) {
// return String(num).padStart(2, '0');   // if the string length is less then 2 add 0.    //string can include letters, numbers, symbols, and spaces.
//};
