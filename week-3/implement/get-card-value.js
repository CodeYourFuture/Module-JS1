// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue
function getCardValue(str) {
  const card = str.substring(0, str.length - 1);
  const cardSymbol = str.substring(str.length - 1);
  const sym = ["♣", "♥", "♦", "♠"];
  if (sym.includes(cardSymbol)) {
    if (
      card === "2" ||
      card === "3" ||
      card === "4" ||
      card === "5" ||
      card === "6" ||
      card === "7" ||
      card === "8" ||
      card === "9"
    ) {
      return Number(card);
    } else if (card === "A") {
      return 11;
    } else if (card === "J" || card === "10" || card === "Q" || card === "K") {
      return 10;
    } else return "Invalid card rank";
  }
  return "Invalid card symbol";
}



console.assert(getCardValue("A♠")=== 11);
console.assert(getCardValue("5♥") === 5);
console.assert(getCardValue("J♣") === 10);
console.assert(getCardValue("10♦") === 10);
console.assert(getCardValue("A♣") === 11);
console.assert(getCardValue("10#") === "Invalid card symbol");
console.assert(getCardValue("77♦") === "Invalid card rank");
console.assert(getCardValue("0♦0") === "Invalid card symbol");

// You need to write assertions for your function to check it works in different cases

// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value

// Handle Number Cards (2-10):
// if (str == )
// Number(str)
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
