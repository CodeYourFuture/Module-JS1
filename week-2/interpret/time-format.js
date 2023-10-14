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

// a) Run this program with node, identify the line the error is thrown. Explain why this error is occurring. How can you fix this error? line 10 because total hours is calculated based on the number of minutes in second and not based on 24 hours.can be fixed by const totalHours = Math.floor(totalMinutes / 60) % 24;


// b) When formatTimeDisplay is called how many times will pad be called? 3 times

// Call formatTimeDisplay with an input of 61, now answer the following:

// c) What is the value assigned to num when pad is called for the first time? 0

// d) What is the return value of pad is called for the first time? 00

// e) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer. 1, because is what is left from the seconds after subtracting complete minutes from seconds.

// f) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer. 01 ,  because padStart(2, "0") converts the number 1 to a string and pads it with a leading '0'.
