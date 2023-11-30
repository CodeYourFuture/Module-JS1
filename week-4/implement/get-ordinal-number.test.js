// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(num) {
  let last2Digit = num.toString().slice(-2);
  if (last2Digit === "11" || last2Digit === "12" || last2Digit === "13") {
    return `${num}th`;
  }

  let lastDigit = num.toString().slice(-1);
  if (lastDigit === "1") {
    return `${num}st`;
  }
  if (lastDigit === "2") {
    return `${num}nd`;
  }
  if (lastDigit === "3") {
    return `${num}rd`;
  }
  return `${num}th`;
}



test("works for any number ending in 11, 12,13", function () {
  expect(getOrdinalNumber(11)).toBe("11th");
  expect(getOrdinalNumber(212)).toBe("212th");
  expect(getOrdinalNumber(113)).toBe("113th");
});

test("works for any number ending in 1", function () {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(21)).toBe("21st");
});

test("works for any number ending in 2", function () {
  expect(getOrdinalNumber(22)).toBe("22nd");
  expect(getOrdinalNumber(32)).toBe("32nd");
  expect(getOrdinalNumber(142)).toBe("142nd");
});

test("works for any number ending in 3", function () {
  expect(getOrdinalNumber(23)).toBe("23rd");
  expect(getOrdinalNumber(1443)).toBe("1443rd");
});

test("works for any other number", function () {
  expect(getOrdinalNumber(7)).toBe("7th");
  expect(getOrdinalNumber(99)).toBe("99th");
});

