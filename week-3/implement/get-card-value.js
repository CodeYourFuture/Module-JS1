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

function getCardValue(card) {
  const rank = card.slice(0, -1);

  if (Number(rank) >= 2 && Number(rank) <= 10) {
    return Number(rank);
  } else if (rank === "J" || rank === "Q" || rank === "K") {
    return 10;
  } else if (rank === "A") {
    return 11;
  } else {
    return "Invalid card rank";
  }
}

console.assert(getCardValue("5♠") === 5, "Test 1");
console.assert(getCardValue("J♦") === 10, "Test 2");
console.assert(getCardValue("A♥") === 11, "Test 3");
console.assert(getCardValue("1♣") === "Invalid card rank", "Test 4");
console.assert(getCardValue("11♣") === "Invalid card rank", "Test 5");
console.assert(getCardValue("M♣") === "Invalid card rank", "Test 6");
