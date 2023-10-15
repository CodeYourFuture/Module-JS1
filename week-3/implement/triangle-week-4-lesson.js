// function isValidTriangle(a, b, c) {
//   if (a + b <= c || b + c <= a || a + c <= b) {
//     return false;
//   } else if (a <= 0 || b <= 0 || c <= 0) {
//     return ``;
//   } else if (a < 0 || b < 0 || c < 0) {
//     return `invalid`;
//   } else {
//     return `equilateral`;
//   }
// }

function isValidTriangle(a, b, c) {
  if (
    a <= 0 ||
    b <= 0 ||
    c <= 0 ||
    a === String() ||
    b === String() ||
    c === String()
  ) {
    return `Not a valid shape`;
  } else {
    if (
      (a === b && c < a + b) ||
      (b === c && a < c + b) ||
      (c === a && b < c + a)
    ) {
      return `Isosceles`;
    } else if ((a === b && c) || (b === c && a) || (c === a && b)) {
      return `Equilateral`;
    } else if (b > a || b || a > b || c || c > a || b) {
      return `Scaling`;
    }
  }
}

console.assert(isValidTriangle(4, 4, 4) === `Equilateral`);
