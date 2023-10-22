// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(input) {

    if (input == 1) {
        return `${input}st`;
    }
    if (input == 2) {
        return `${input}nd`;
    }
    if (input == 3) {
        return `${input}rd`;
    }
    if (input == 11) {
        return `${input}th`;
    }

    if (input.toString().length == 2) {
        const secondDigit = input.toString();
        if (secondDigit[1] == 1) {
            return `${input}st`;
        }
        if (secondDigit[1] == 2) {
            return `${input}nd`;
        }
        if (secondDigit[1] == 3) {
            return `${input}rd`;
        }
    }

    return `${input}th`;



}

test("converts 1 to an ordinal number", function () {
    const input = 1;
    const currentOutput = getOrdinalNumber(input);
    const targetOutput = "1st";

    expect(currentOutput).toBe(targetOutput);
});

test("converts 1 to an ordinal number", function () {
    const input = 11;
    const currentOutput = getOrdinalNumber(input);
    const targetOutput = "11th";

    expect(currentOutput).toBe(targetOutput);
});

test("converts 1 to an ordinal number", function () {
    const input = 2;
    const currentOutput = getOrdinalNumber(input);
    const targetOutput = "2nd";

    expect(currentOutput).toBe(targetOutput);
});

test("converts 1 to an ordinal number", function () {
    const input = 3;
    const currentOutput = getOrdinalNumber(input);
    const targetOutput = "3rd";

    expect(currentOutput).toBe(targetOutput);
});

test("converts 1 to an ordinal number", function () {
    const input = 30;
    const currentOutput = getOrdinalNumber(input);
    const targetOutput = "30th";

    expect(currentOutput).toBe(targetOutput);
});
test("converts 1 to an ordinal number", function () {
    const input = 5;
    const currentOutput = getOrdinalNumber(input);
    const targetOutput = "5th";

    expect(currentOutput).toBe(targetOutput);
});

test("converts 1 to an ordinal number", function () {
    const input = 20;
    const currentOutput = getOrdinalNumber(input);
    const targetOutput = "20th";

    expect(currentOutput).toBe(targetOutput);
});

test("converts 1 to an ordinal number", function () {
    const input = 21;
    const currentOutput = getOrdinalNumber(input);
    const targetOutput = "21st";

    expect(currentOutput).toBe(targetOutput);
});
test("converts 1 to an ordinal number", function () {
    const input = 35;
    const currentOutput = getOrdinalNumber(input);
    const targetOutput = "35th";

    expect(currentOutput).toBe(targetOutput);
});
test("converts 1 to an ordinal number", function () {
    const input = 42;
    const currentOutput = getOrdinalNumber(input);
    const targetOutput = "42nd";

    expect(currentOutput).toBe(targetOutput);
});
test("converts 1 to an ordinal number", function () {
    const input = 23;
    const currentOutput = getOrdinalNumber(input);
    const targetOutput = "23rd";

    expect(currentOutput).toBe(targetOutput);
});

test("converts 1 to an ordinal number", function () {
    const input = 84;
    const currentOutput = getOrdinalNumber(input);
    const targetOutput = "84th";

    expect(currentOutput).toBe(targetOutput);
});