const getCardValue = require("./get-card-value");

test("getting card value", function() {
    const str = "A♠";
    const currentOutput = getCardValue(str);
    const targetOutput = 11;
    
    expect(currentOutput).toBe(targetOutput);
});