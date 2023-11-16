// Function to check if a character is a digit
function isDigit(char) {
  return /^\d$/.test(char);
}

function validateCard(cardNumber) {
  // Convert the number to a string to handel errors if the input number is not a string
  cardNumber = cardNumber.toString();

  // Check if any character in the card number is not a digit
  if (!cardNumber.split("").every(isDigit)) {
    return `"${cardNumber}" is not a valid number, please provide a valid card number!`;
  }

  if (cardNumber.length !== 16) {
    return false;
  }
  // Check if there are at least two different digits in the card number
  let hasTwoDifferentDigits = false;
  for (let i = 0; i < cardNumber.length - 1; i++) {
    for (let j = i + 1; j < cardNumber.length; j++) {
      if (cardNumber[i] !== cardNumber[j]) {
        hasTwoDifferentDigits = true;
        break;
      }
    }
    if (hasTwoDifferentDigits) {
      break;
    }
  }
  if (!hasTwoDifferentDigits) {
    return false;
  }

  // Check if the final digit is even
  if (parseInt(cardNumber[15]) % 2 !== 0) {
    return false;
  }

  // Calculate the sum of all digits
  let sumOfDigits = 0;
  for (let digit of cardNumber) {
    sumOfDigits += parseInt(digit);
  }

  // Check if the sum of digits is greater than 16
  if (sumOfDigits <= 16) {
    return false;
  }

  // The credit card number is valid
  return true;
}

console.log(validateCard("9999777788880000"));
console.log(validateCard("92332119011112"));
