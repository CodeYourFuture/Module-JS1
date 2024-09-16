const getCardValue = require("./get-card-value");

test(' When the function getCardValue is called, Then it should return the numerical card value.when called card with a rank between "2" and "10". return the numeric value corresponding to the rank (e.g., "5" should return 5). ' , () => {

    expect(getCardValue("4")).toBe(4);
});


test('When the function getCardValue is called, with rank of "J," "Q," or "K". Then it should return value 10. When the function is called with an Ace, return by default, assume the Ace is worth 11 points,' , () => {

    expect(getCardValue("J")).toBe(10);
});


test('When the function getCardValue is called, with an invalid rank (neither a number nor a recognized face card), it should throw an error indicating "Invalid card rank.' , () => {

    expect(getCardValue("J12")).toBe("Invalid card rank.");
});