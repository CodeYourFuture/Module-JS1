// In this week's prep, we started implementing getOrdinalNumber

const getOrdinalNumber = require("./get-ordinal-number");

test("when the function is called, it should bring num with suffix of \"st\", \"en\", \"rd\", and \"th\".", () => {

    expect(getOrdinalNumber(1)).toBe("1st");
})


test("when the function is called, it should bring num with suffix of \"st\", \"en\", \"rd\", and \"th\".", () => {

    expect(getOrdinalNumber(11)).toBe("11th");
})

test("when the function is called, it should bring num with suffix of \"st\", \"en\", \"rd\", and \"th\".", () => {

    expect(getOrdinalNumber(21)).toBe("21st");
})
// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback


