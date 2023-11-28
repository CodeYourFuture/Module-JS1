let cardNumber = '1009000100000108';
cardNumber = cardNumber.replace(/\D/g, '');  // to remove any non digits.
function creditCardLength(cardNumber) { // the function is to check card number length.
    let theLength = (Math.log(Math.abs(cardNumber)+1) * 0.43429448190325176 | 0) + 1;
    if (theLength > 16 || theLength < 16) 
    {return false + ": " +"Invalid Length";}
   else
      if (theLength == 16) 
        return true;
}
function sumDigits(cardNumber) { // this function to check the sum of card digits.
    let sum = 0;
    while (cardNumber) {
        sum += cardNumber % 10;
        cardNumber = Math.floor(cardNumber / 10);
    }
  if (sum > 16) 
    return true;
  else
    return false + ": " + "Invlid, The Sum of digits must be > 16";
    }
    function lastDigit(cardNumber) {
        let lastDgt = cardNumber.toString().slice(-1);  // this function to find the last digit.
        return(lastDgt);
    }
    function isEven(lastDgt) {
        lastDgt = Number(lastDgt);
      return lastDgt === 0 || !!(lastDgt && !(lastDgt%2));  // this function to check if the last digit is even or odd.
      }
      function isOdd(lastDgt) {
        return isEven(Number(lastDgt) + 1);
      }
let aa = creditCardLength(cardNumber);
let bb = sumDigits(cardNumber);
let xx = lastDigit(cardNumber);
let cc = isEven(xx);