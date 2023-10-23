// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(num){
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


test("works for any number ending in 2", function () {
    expect(getOrdinalNumber(32)).toBe("32nd");
    expect(getOrdinalNumber(62)).toBe("62nd");
    expect(getOrdinalNumber(42)).toBe("42nd");
  });

  test("works for any number ending in 3", function () {
    expect(getOrdinalNumber(73)).toBe("73rd");
    expect(getOrdinalNumber(43)).toBe("43rd");
    expect(getOrdinalNumber(93)).toBe("93rd");
  });