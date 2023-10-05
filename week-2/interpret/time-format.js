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
//TypeError: num.toString(...).padStart is not a function
// This is because padStart is only used for strings and not numbers. We should convert the number to string before using padStart.
//We can write line 2 like this instead;
/*
return String(num).padStart(2, "0");
*/

// b) When formatTimeDisplay is called how many times will pad be called?
// Three times - once for Hours, once for Minutes and once for Seconds.
// Call formatTimeDisplay with an input of 61, now answer the following:

// c) What is the value assigned to num when pad is called for the first time?
/*
0 because it was called from totathours which was 0 
(const totalHours = (totalMinutes - remainingMinutes) / 60)
*/

// d) What is the return value of pad is called for the first time?
/*
it is 00. 
This is because the function pad which has padStart ensures that the string has atleast 2 characters.
*/

// e) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
/*
1
This was after (const remainingSeconds = seconds % 60;) was calculated.
*/

// f) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
/*
01
This is because the function pad which has padStart ensures that the string has atleast 2 characters.
*/
