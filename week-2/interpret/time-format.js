function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
   remainingSeconds = seconds % 60;
   totalMinutes = (seconds - remainingSeconds) / 60;
   remainingMinutes = totalMinutes % 60;
   totalHours = (totalMinutes - remainingMinutes) / 60;
   remainingHours = totalHours % 24;

  return `${pad(remainingHours)}:${pad(remainingMinutes)}:${pad(
    remainingSeconds
  )}`;
}

console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) Run this program with node, identify the line the error is thrown. Explain why this error is occurring. How can you fix this error?
//  Answer: The error was thrown on line 6, 7, 8, 9 10. The error occurred because variable was declared with const within the local scope. By simply removing the const or by replacing it with let.

// b) When formatTimeDisplay is called how many times will pad be called?
// Answer: It will be called 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// c) What is the value assigned to num when pad is called for the first time?
//Answer: The value assigned to num is 0.
// d) What is the return value of pad is called for the first time?
// Answer: The return value is 00.
// e) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// Answer: The value assigned to num when called for the last time is 1. Explanation: It is the value gotten after executing the variable declaration of the remaining seconds 
// f) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// Answer: The return value is 01. Explanation: The first function states that when pad is called it should always return 2values. So, it added 0 to 1 fulfill the requirement of the first function.
