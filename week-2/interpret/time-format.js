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

<<<<<<< HEAD
// a) Run this program with node, identify the line the error is thrown. Explain why this error is occurring. How can you fix this error?
    //  There is no error.
      
// b) When formatTimeDisplay is called how many times will pad be called?
    // 3 times
=======
// a) When formatTimeDisplay is called how many times will pad be called?

// Call formatTimeDisplay with an input of 143, now answer the following:
>>>>>>> 03fce56db903fb986ff36f73e4d57cebfa18707c

// b) What value is assigned to the parameter num when pad is called for the first time?

<<<<<<< HEAD
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

=======
// c) What is the return value of pad when it is called for the first time?

// d) What is the value assigned to the parameter num when pad
// is called for the last time in this program?  Explain your answer

// e) What is the return value when pad is called
// for the last time in this program?  Explain your answer

// f) Research an alternative way of padding the numbers in this code.
// Look up the string functions on mdn
>>>>>>> 03fce56db903fb986ff36f73e4d57cebfa18707c
