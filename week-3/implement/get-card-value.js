// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue

// You need to write assertions for your function to check it works in different cases

// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value

function getCardValue(card, symbol) {
  const NumberCards = ["2", "3", "4", "5", "6", "7", "8", "9"];
  const cardSymbols = ["♠︎", "♣︎", "♥︎", "♦︎"];
  const aceOfSpades = ["A"];
  const faceCards = ["10", "J", "Q", "K"];
  if (NumberCards.includes(card) && cardSymbols.includes(symbol)) {
    return Number(card);
  } else if (aceOfSpades.includes(card) && cardSymbols.includes(symbol)) {
    return 11;
  } else if (faceCards.includes(card) && cardSymbols.includes(symbol)) {
    return 10;
  } else {
    return "Invalid card rank.";
  }
}

// Assertion 1

console.log(getCardValue("9", "♥︎"));
const currentOutput1 = getCardValue("9", "♥︎");
const targetOutput1 = 9;
console.assert(
  currentOutput1 === targetOutput1,
  "current output %s, target output %s",
  getCardValue("9", "♥︎"),
  targetOutput1
);

// Assertion 2

console.log(getCardValue("A", "♠︎"));
const currentOutput2 = getCardValue("A", "♠︎");
const targetOutput2 = 11;
console.assert(
  currentOutput2 === targetOutput2,
  "current output: %s, target output %s",
  currentOutput2,
  targetOutput2
);

// Assertion 3

console.log(getCardValue("10", "♦︎"));
const currentOutput3 = getCardValue("10", "♦︎");
const targetOutput3 = 10;
console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output %s",
  currentOutput3,
  targetOutput3
);

// Assertion 4

console.log(getCardValue("100", "q"));
const currentOutput4 = getCardValue("100", "q");
const targetOutput4 = "Invalid card rank.";
console.assert(
  currentOutput4 === targetOutput4,
  "current output: %s, target output %s",
  currentOutput4,
  targetOutput4
);

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
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
