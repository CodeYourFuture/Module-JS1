// const toGetLength = num.length;
// const toGetDigit = Number(num);
// let ifNotNumber = !isNaN(toGetDigit);
// console.log(toGetDigit, toGetLength, ifNotNumber);
// for (let i = 0; i < num.length - 1; i++) {
//   console.log(num[i], num[i + 1]);
// }

// let x = 0;
//   let count = 0;
//   while(count < width){
//     rect(x,0,10,height);
//     x += 10;
//     count ++;
//   }

// Number must be 16 digits, all of them must be numbers.
// - You must have at least two different digits represented (all of the digits cannot be the same).
// - The final digit must be even.
// - The sum of all the digits must be greater than 16.

function cardValidator(num) {
  const changeToNumber = String(num);
  const checkTypeIsNumber = isNaN(num);
  const lastDigit = num % 10;
  const checkLastNumIsEven = lastDigit % 2 === 0;
  let numberCount = 0;
  if (changeToNumber.length < 16 || checkTypeIsNumber || !checkLastNumIsEven) {
    return false;
  }

  while (num) {
    if (num % 10 !== lastDigit) return true;
    num = Math.floor(num / 10);
    numberCount = num;
    return numberCount;
  }
  return false;
}

console.log(cardValidator(1234567812345678));
console.log(cardValidator(1234567812345663));
console.log(cardValidator(1234567812345662));
console.log(cardValidator(1111111111111111));

// let number = 20;
// number = String(number);
// console.log(number.length);

// console.log(cardValidator("1243546578998747"));
//cardValidator("14567");
//cardValidator(897987987);

// 1 - How can we get the length of the digits in a number?
// - Change the number input to a string to determine the length?

// 2 - Must have at least two different digits
// - Loop through the digits and compare them to something else?

// 3 - Last digit must be even
// - We must extract the last number, and then find a way to
// determine if its even

// 4 - We must find a way to extract all the numbers and then add them
// by each other
