// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

const { default: expect } = require("expect");

// You will need to implement a function getCardValue

// You need to write assertions for your function to check it works in different cases

// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "10",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.

// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."

function getCardValue(str) {
  if (str === "A") {
    return 11;
  } else if (str === "J" || str === "Q" || str === "K") {
    return 10;
  } else if (str > 1 && str < 11) {
    return +str;
  } else return "Invalid card rank";
}

test("Check if function is returning right value for BlackJack game", function () {
  
  expect(getCardValue("A")).toBe(11);
  expect(getCardValue("J")).toBe(10);
  expect(getCardValue("K")).toBe(10);
  expect(getCardValue("2")).toBe(2);
  expect(getCardValue("5")).toBe(5);
});