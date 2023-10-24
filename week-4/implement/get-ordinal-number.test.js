// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback
// function getOrdinalNumber(num) {
//   if (num % 10 === 1 && num % 100 != 11) {
//     return `${num}st`;
//   } else if (num % 10 === 2 && num % 100 != 12) {
//     return `${num}nd`;
//   } else if (num % 10 === 3 && num % 100 != 13) {
//     return `${num}rd`;
//   }
//    return `${num}th`;
// }
function getOrdinalNumber(num) {
  const toSt = num % 10 === 1 && num % 100 != 11;
  const toNd = num % 10 === 2 && num % 100 != 12;
  const toRd = num % 10 === 3 && num % 100 != 13;
  
  return toSt ? `${num}st` : toNd ? `${num}nd` : toRd ? `${num}rd` : `${num}th`;
}

test("works for any number ending in 1", () => {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(11)).toBe("11th");
  expect(getOrdinalNumber(32)).toBe("32nd");
  expect(getOrdinalNumber(43)).toBe("43rd");
  expect(getOrdinalNumber(143)).toBe("143rd");
  expect(getOrdinalNumber(1142)).toBe("1142nd");
});
