// const age = 33;
let age = 33;
age = age + 1;

console.log("age =", age);

/*
The issue in this code is that you are attempting to reassign a new value to a 
constant variable (age) after it has been initially assigned a value, and then reassign the value by 1 
In JavaScript, const is used to declare a variable whose value should not be reassigned after it's 
initially set. Therefore, attempting to modify or reassign a const variable will result in an error.
*/
// solutions
/*
To resolve this issue, you should use let instead of const 
if you want to declare a variable that can be reassigned. 
*/
