// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback
function getOrdinalNumber(number) {
    if(number % 10 === 1){
        if (number === 11) {
          return `${number}th`;
        }
        return `${number}st`;
    }
    else if(number % 10 === 2) {
        if (number === 12) {
            return `${number}th`;
        }
        return `${number}nd`;
    }
    else if (number % 10 === 3) {
      if (number === 13) {
        return `${number}th`;
      }
      return `${number}rd`;
    }
    return `${number}th`;
    
}

test("converts number ending in 1 to ordinal number", function () {
    expect(getOrdinalNumber(11)).toBe("11th");
    expect(getOrdinalNumber(1)).toBe("1st");
    expect(getOrdinalNumber(91)).toBe("91st");
});

test("converts number ending in 2 to ordinal number", function () {
  expect(getOrdinalNumber(22)).toBe("22nd");
  expect(getOrdinalNumber(12)).toBe("12th");
  expect(getOrdinalNumber(62)).toBe("62nd");
});

test("converts number ending in 3 to ordinal number", function () {
  expect(getOrdinalNumber(43)).toBe("43rd");
  expect(getOrdinalNumber(13)).toBe("13th");
  expect(getOrdinalNumber(23)).toBe("23rd");
});
 
test("converts number ending in 4,5,6,7,8,9 and 0 to ordinal number", function () {
  expect(getOrdinalNumber(20)).toBe("20th");
  expect(getOrdinalNumber(78)).toBe("78th");
  expect(getOrdinalNumber(95)).toBe("95th");
}); 
