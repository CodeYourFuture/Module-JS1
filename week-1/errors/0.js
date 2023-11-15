//This is just an instruction for the first activity - but it is just for human consumption
//We don't want the computer to run these 2 lines - how can we solve this problem?
// We have to convert both text as a comment.

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(3));

function fibonacci(n) {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 65, 99, 164, 263, 327, 610
console.log(fibonacci(15));
