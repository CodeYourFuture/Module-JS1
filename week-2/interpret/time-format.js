function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;
  const remainingHours = totalHours % 24; 

  console.log(pad(remainingSeconds));

  return `${pad(remainingHours)}:${pad(remainingMinutes)}:${pad(
    remainingSeconds
  )}`;

}

console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) Run this program with node, identify the line the error is thrown. Explain why this error is occurring. How can you fix this error?

// b) When formatTimeDisplay is called how many times will pad be called?
//    Three times

// Call formatTimeDisplay with an input of 61, now answer the following:

// c) What is the value assigned to num when pad is called for the first time?
//    remainingHours

// d) What is the return value of pad is called for the first time?
//    00

// e) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
//    It is taking remainingSeconds last time. First assigned value was remainingHours to num when called, 
//then assigned value was remainingMinutes to num. So, the last time it has the assigned value of num was remainingSeconds.

// f) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
//It has the return value of 01 because when it took remainingSeconds as a parameter 
//which has 1 value return the number padded with 0 at the start.
