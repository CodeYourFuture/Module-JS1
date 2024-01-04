// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(number) {
  const lastNum = number.toString().slice(-1);
  if (lastNum === "1") {
    return number + "st";
  } else if (lastNum === "2") {
    return number + "nd";
  } else if (lastNum === "3") {
    return number + "rd";
  } else {
    return number + "th";
  }
  return lastNum;
}

test("converts 1 to an ordinal number", function () {
  const input = 1;
  const currentOutput = getOrdinalNumber(input);
  const targetOutput = "1st";

  expect(currentOutput).toBe(targetOutput);
});

test("converts 10 to an ordinal number", function () {
  const input = 10;
  const currentOutput = getOrdinalNumber(input);
  const targetOutput = "10th";

  expect(currentOutput).toBe(targetOutput);
});

test("converts 22 to an ordinal number", function () {
  const input = 22;
  const currentOutput = getOrdinalNumber(input);
  const targetOutput = "22nd";

  expect(currentOutput).toBe(targetOutput);
});

test("converts 33 to an ordinal number", function () {
  const input = 33;
  const currentOutput = getOrdinalNumber(input);
  const targetOutput = "33rd";

  expect(currentOutput).toBe(targetOutput);
});

test("converts 45 to an ordinal number", function () {
  const input = 45;
  const currentOutput = getOrdinalNumber(input);
  const targetOutput = "45th";

  expect(currentOutput).toBe(targetOutput);
});
