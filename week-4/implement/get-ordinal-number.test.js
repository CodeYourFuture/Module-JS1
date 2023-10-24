// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(num) {
  const strNum = String(num).slice(String(num).length - 1);
  const teenNum = String(num).slice(String(num).length - 2);
  return teenNum >= 11 && teenNum <= 13
    ? `${num}th`
    : strNum == 1
    ? `${num}st`
    : strNum == 2
    ? `${num}nd`
    : strNum == 3
    ? `${num}rd`
    : `${num}th`;
}

// console test check
// console.log(getOrdinalNumber(5));

// JEST test
// to loop through the tests
const ordinals = [
  "1st",
  "2nd",
  "4th",
  "8th",
  "16th",
  "32nd",
  "64th",
  "128th",
  "256th",
  "512th",
];
test("Return num to ordinal", function () {
//   test listed ordinals above
  for (i = 0, num = 1; i < ordinals.length; i++, num *= 2) {
    expect(getOrdinalNumber(num)).toBe(ordinals[i]);
  }
//   test specific output
  const currentOutput = getOrdinalNumber(2);
  const targetOutput = "2nd";
  expect(currentOutput).toBe(targetOutput);

//   test some other specific examples
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(3)).toBe("3rd");
  expect(getOrdinalNumber(11)).toBe("11th");
  expect(getOrdinalNumber(71)).toBe("71st");
  expect(getOrdinalNumber(5462)).toBe("5462nd");
});
