// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback
function getOrdinalNumber(num) {
  if (num == 1) {
    return `${num}st`;
  }
  if (num == 2) {
    return `${num}nd`;
  }
  if (num == 3) {
    return `${num}rd`;
  }

  if (num == 15) {
    return `${num}th`;
  }

  const lastDigit = num % 10;
  if (lastDigit === 1) {
    return `${num}st`;
  } else if (lastDigit === 2) {
    return `${num}nd`;
  } else if (lastDigit === 3) {
    return `${num}rd`;
  }

  return `${num}th`;
}

console.log(getOrdinalNumber(1));
console.log(getOrdinalNumber(12));
console.log(getOrdinalNumber(10));
console.log(getOrdinalNumber(33));
console.log(getOrdinalNumber(3));
// function getOrdinalNumber(num) {
//   if (num % 100 >= 11 && num % 100 <= 13) {
//     return `${num}th`;
//   }

//   const lastDigit = num % 10;
//   switch (lastDigit) {
//     case 1:
//       return `${num}st`;
//     case 2:
//       return `${num}nd`;
//     case 3:
//       return `${num}rd`;
//     default:
//       return `${num}th`;
//   }
// }
