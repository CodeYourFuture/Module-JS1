// In this week's prep, we started implementing getOrdinalNumber
// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(num) {
  if (num === String(num)) {
    return `${num} is not a number`;
  } else if (num >= 4 && num <= 20) {
    return `${num}th`;
  } else if (num <= 0) {
    return `${num} cannot be returned as an ordinal number`;
  } else {
    if (num % 10 === 1) {
      return `${num}st`;
    } else if (num % 100 === 13) {
      return `${num}th`;
    } else if (num % 10 === 2) {
      return `${num}nd`;
    } else if (num % 10 === 3) {
      return `${num}rd`;
    }
  }
}

test("return 1 as an ordinal number", function () {
  expect(getOrdinalNumber(1)).toBe(`1st`);
});

test("return 41 as an ordinal number", function () {
  expect(getOrdinalNumber(41)).toBe(`41st`);
});

test("return 2 as an ordinal number", function () {
  expect(getOrdinalNumber(2)).toBe(`2nd`);
});

test("return 52 as an ordinal number", function () {
  expect(getOrdinalNumber(52)).toBe(`52nd`);
});

test("return 33 as an ordinal number", function () {
  expect(getOrdinalNumber(33)).toBe(`33rd`);
});

test("return 52 as an ordinal number", function () {
  expect(getOrdinalNumber(103)).toBe(`103rd`);
});

test("return 13 as an ordinal number", function () {
  expect(getOrdinalNumber(13)).toBe(`13th`);
});

test("return 13 as an ordinal number", function () {
  expect(getOrdinalNumber(113)).toBe(`113th`);
});

test("return 3 as an ordinal number", function () {
  expect(getOrdinalNumber(3)).toBe(`3rd`);
});

test("returns not a number", function () {
  expect(getOrdinalNumber(";'w=-0")).toBe(`;'w=-0 is not a number`);
});

test("returns cannot be returned as an ordinal number, if less than 1", function () {
  expect(getOrdinalNumber(0)).toBe(`0 cannot be returned as an ordinal number`);
});

test("returns cannot be returned as an ordinal number, if less than 1", function () {
  expect(getOrdinalNumber(-1)).toBe(
    `-1 cannot be returned as an ordinal number`
  );
});
