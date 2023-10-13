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

/*

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) Run this program with node, identify the line the error is thrown. Explain why this error is occurring. How can you fix this error?

line 7

// b) When formatTimeDisplay is called how many times will pad be called?

pad is called three times in the formatTimeDisplay function,
 once for remainingHours, once for remainingMinutes, and 
once for remainingSeconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// c) What is the value assigned to num when pad is called for the first time?

When pad is called for the first time, num is equal to
 remainingHours, which is the value of hours after performing calculations.

// d) What is the return value of pad is called for the first time?

The return value of pad when called for the first time is a two-digit string representation of remainingHours. It ensures that the value
 is zero-padded, making it consistent with the time format.

// e) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer

When pad is called for the last time in this program, num is equal to remainingSeconds, which is the value of seconds 
after performing calculations.


// f) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer

The return value of pad when last called is a two-digit string representation of remainingSeconds. This ensures that seconds are 
padded with zeros, making the time format consistent.

