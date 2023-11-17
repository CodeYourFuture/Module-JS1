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
//..........................................................................

ANSWER

// a) When we use `formatTimeDisplay`, we also use a helper called `pad` three times. We use it for hours, minutes, and seconds to make them look neat.

// b) The first time we use `pad`, it helps us with the hours. It takes the total hours and divides them by 24 to get a special kind of hours.

// c) The result we get from the first use of `pad` is a string that represents the hours, but it has zeros added in front to make it look good in our time display.

// d) The last time we use `pad` in this program, it helps with the seconds. We give it the number of seconds, and it adds zeros in front to make it look nice.

// e) The final result we get from the last use of `pad` is a string representing the seconds, but it's formatted with zeros in front to fit well in our time display.

// f) There's another method called `String.prototype.padStart()`. It's like another tool we can use to make our numbers look neat. Here's an example:


// function pad(num) { return String(num).padStart(2, '0');}clear
