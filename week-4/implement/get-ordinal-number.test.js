// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(integer) {
  const lastDigit = integer % 10;
  const lastTwoDigits = integer % 100;

  switch (lastDigit) {
    case 1:
      if (lastTwoDigits === 11) {
        return integer + "th";
      } return integer + "st";
    case 2:
      if (lastTwoDigits === 12) {
        return integer + "th";
      } return integer + "nd";
    case 3:
      if (lastTwoDigits === 13) {
        return integer + "th";
      } return integer + "rd";
    default:
      return integer + "th";
  }
}

test("works for any number ending in 1", () => {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(11)).toBe("11th");
  expect(getOrdinalNumber(201)).toBe("201st");
  expect(getOrdinalNumber(1001)).toBe("1001st");
  expect(getOrdinalNumber(15511)).toBe("15511th");
});

test('works for any number ending in 2', () => {
  expect(getOrdinalNumber(2)).toBe("2nd");
  expect(getOrdinalNumber(12)).toBe("12th");
  expect(getOrdinalNumber(202)).toBe("202nd");
  expect(getOrdinalNumber(1002)).toBe("1002nd");
  expect(getOrdinalNumber(15512)).toBe("15512th");
})

test("works for any number ending in 3", () => {
  expect(getOrdinalNumber(3)).toBe("3rd");
  expect(getOrdinalNumber(13)).toBe("13th");
  expect(getOrdinalNumber(203)).toBe("203rd");
  expect(getOrdinalNumber(1003)).toBe("1003rd");
  expect(getOrdinalNumber(15513)).toBe("15513th");
});

test("works for any number ending in greater than 3", () => {
  expect(getOrdinalNumber(4)).toBe("4th");
  expect(getOrdinalNumber(14)).toBe("14th");
  expect(getOrdinalNumber(204)).toBe("204th");
  expect(getOrdinalNumber(5)).toBe("5th");
  expect(getOrdinalNumber(15)).toBe("15th");
  expect(getOrdinalNumber(205)).toBe("205th");
  expect(getOrdinalNumber(6)).toBe("6th");
  expect(getOrdinalNumber(16)).toBe("16th");
  expect(getOrdinalNumber(206)).toBe("206th");
  expect(getOrdinalNumber(142588)).toBe("142588th");
});