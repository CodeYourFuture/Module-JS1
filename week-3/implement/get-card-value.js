// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue

// You need to write assertions for your function to check it works in different cases

// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value

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

function getCardValue(number, suit) {

  const numberCards = ["2", "3", "4", "5", "6", "7", "8", "9"];
  const faceCards = ["10", "J", "K", "Q"];
  const aceCard = ["A"];
  const suitsCards = ["♥️", "♣", "♠️", "♦️️"];

  if (numberCards.includes(number) && suitsCards.includes(suit)) {
    return Number(number);
  } else if (faceCards.includes(number) && suitsCards.includes(suit)) {
    return 10;
  } else if (aceCard.includes(number) && suitsCards.includes(suit)) {
    return 11;
  } else {
    return "Invalid card rank.";
  }
}

const currentOutput = getCardValue("8", "♠️");
const targetOutput = 8;
console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);

const currentOutput2 = getCardValue("A", "♥️");
const targetOutput2 = 11;
console.assert(
  currentOutput2 === targetOutput2,
  "current output: %s, target output: %s",
  currentOutput2,
  targetOutput2
);

const currentOutput3 = getCardValue("g", "♦️️");
const targetOutput3 = "Invalid card rank.";
console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output: %s",
  currentOutput3,
  targetOutput3
);



