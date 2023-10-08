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
console.log(formatTimeDisplay(86900));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) Run this program with node, identify the line the error is thrown. Explain why this error is occurring. How can you fix this error?
// there's not a syntax error in this code but it could be called a semantic error , as if amount of seconds exceed
// seconds of a day (86400) ; and it's because of this line of code `const remainingHours = totalHours % 24;`.
//we can remove this part of code or limit the input to be less than 24 hours . and it should work accurately .


// b) When formatTimeDisplay is called how many times will pad be called?
// `pad` function is called 3 times when `formatTimeDisplay` is called , in return line of the `formatTimeDisplay` function .


// Call formatTimeDisplay with an input of 61, now answer the following:

// c) What is the value assigned to num when pad is called for the first time?
// 0 will be passed to the `pad` function , as the first time pas is called is `${pad(remainingHours)}` , and remainingHours for
//61 seconds is 0 . pad will make it `00` .

// d) What is the return value of pad is called for the first time?
// it is `00` , pad makes sure the passed parameter has 2 digit and if it doesn't add 0 to start of it till it get to 2 
//... 2 digit(character actually as it returns a string and it is a string method)


// e) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// last time pad's called it returns 1 , remaining seconds . `${pad(
//    remainingSeconds)}`
  

// f) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// `pad` returns '01' , 1 is passed to it and pad makes it two character , by adding 0 to start of it .