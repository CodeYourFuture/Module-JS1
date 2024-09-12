const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// math.random gives a value between 0 (inclusive) and 1 (exclusive).
// max - min + 1 is 100, so a random number multiplied by 100 is between 0 (inclusive) and 100 (exclusive).
// Adding +1 shifts the range to be between 1 and 101 (exclusive).
// Math.floor rounds the number, so this function gives us a random whole number between 1 and 100 (inclusive).

console.log(num);
