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

  return `${remainingHours.toString().padStart(2, "0")}:${remainingMinutes
    .toString()
    .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

console.log(formatTimeDisplay(323485723465));

// You can play computer with this example
// Use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?                      3 times

// Call formatTimeDisplay with an input of 143, now answer the following:

// b) What value is assigned to the parameter num when pad is called for the first time?       143 assigned to parameter

// c) What is the return value of pad when it is called for the first time?                    00

// d) What is the value assigned to the parameter num when pad                                 23, because remaining seconds is the remainder of total seconds when divided by 60
// is called for the last time in this program?  Explain your answer

// e) What is the return value when pad is called                                              23, because 23 is bigger than 10 so pad returns num itself
// for the last time in this program?  Explain your answer

// f) Research an alternative way of padding the numbers in this code.                         we can use .padStart(2, "0") it gives us min 2 characters with filling "0"
// Look up the string functions on mdn
