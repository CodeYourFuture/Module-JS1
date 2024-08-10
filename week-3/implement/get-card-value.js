// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

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

function getCardValue(cards) {
  const number = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const type = ["♣", "♦", "♥", "♠"];
  let num = cards.slice(0, -1);

  if (number.includes(num) && type.includes(cards.slice(-1))) {
    if (num === "A") {
      result = 11;
    } else if (num === "J") {
      result = 10;
    } else if (num === "Q") {
      result = 10;
    } else if (num === "K") {
      result = 10;
    } else {
      result = Number(num);
    }
    return result;
  } else {
    return "Invalid card rank.";
  }
}

console.assert(getCardValue("A♠") === 11, "11");
console.assert(getCardValue("5♠") === 5, "5");
console.assert(getCardValue("J♥") === 10, "10j");
console.assert(getCardValue("Q♠") === 10, "10q");
console.assert(getCardValue("K♠") === 10, "10k");
console.assert(getCardValue("2a") === "Invalid card rank.", "6");
