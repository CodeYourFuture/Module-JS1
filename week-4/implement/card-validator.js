function isCardValid(number) {
    let hasValidLength = false;
    let hasOnlyDigits = !isNaN(Number(number));//The Number function is converting it to a number, and it will return NaN (Not a Number) if the string cannot be converted to a number.
    let lastDigitIsEven = false;
    let hasSumGreaterThanSixteen = false;
    let notHasSameNumber = false;
    let sum = 0;

    if (number.length == 16) {
        hasValidLength = true;
    }
    for (let i = 0; i <= number.length; i++) {
        if (number[i] > 0) {
            sum += Number(number[i]);
        }
    }
    if (number[number.length-1] % 2 == 0) {
        lastDigitIsEven = true;
    }
    for (let i = 0; i < number.length-1; i++) {
        if (number[i] !== number[i+1]) {  //This code loop through the string, comparing each character of the string with its next number. If it is not match it set the "notHasSameNumber " to true.otherwise it remains false.
            notHasSameNumber = true;
        }
    }
    if (sum >= 16) {
        hasSumGreaterThanSixteen = true;
    }
    if (hasOnlyDigits == true && notHasSameNumber == true && lastDigitIsEven == true && hasSumGreaterThanSixteen == true && hasValidLength == true) {
        return true;
    } else {
        return false;
    }
}
const test1=isCardValid("9999777788880000");
const test2=isCardValid("6666666666661666");
const test3=isCardValid("19788880bn00");
const test4=isCardValid("a92332119c011112");
const test5=isCardValid("1111111111111110");
const test6=isCardValid("6666666666666661");
const test7=isCardValid("4444444444444444");

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
console.log(test6);
console.log(test7);