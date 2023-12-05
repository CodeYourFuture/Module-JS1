function validCardNumber(cardNumber) {
  //if the input is not a number or is not 16 digits
  if (isNaN(cardNumber) || cardNumber.length !== 16) {
    return false;
  }

  // here .split is taking string of numbers and splitting it into individual parts like "2" "6" and .map  takes each of those individual parts  and converts them into numbers.
  const eachNum = cardNumber.split("").map(Number);

  // if all numbers are the same
  const isSame = eachNum.every((eachNums) => eachNums === eachNum[0]);
  if (isSame) {
    return false;
  }

  // if the final number is even
  if (eachNum[15] % 2 !== 0) {
    return false;
  }

  // Calculate the sum of all numbers
  const sum = eachNum.reduce((total, eachNums) => total + eachNums, 0);

  //  if the sum is greater than 16
  if (sum <= 16) {
    return false;
  }

  return true;
}

// Test cases

console.log(validCardNumber("3333333333333330")); // false
console.log(validCardNumber("2222222222222222")); // false

console.log(validCardNumber("3549777788880000")); // true
console.log(validCardNumber("6236699363666166")); // true

console.log(validCardNumber("a92332119c011112")); // false
console.log(validCardNumber("4999999999999999")); // false
