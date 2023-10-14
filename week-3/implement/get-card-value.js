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
    if (card === "A") {
        return 11;
    } else if (card === "2" || card === "3" || card === "4" || card === "5" || card === "6" || card === "7" || card === "8" || card === "9") {
        return Number(card);
    } else if (card === "J" || card === "K" || card === "Q") {
        return 10;
    } else {
        return "Invalid card rank."
    }
}



const currentOutput = getCardValue("A");
const targetOutput = 11;
console.assert(
    currentOutput === targetOutput,
    "current output: %s, target output: %s",
    currentOutput,
    targetOutput
);

const currentOutput1 = getCardValue("Q");
const targetOutput1 = 10;
console.assert(
    currentOutput1 === targetOutput1,
    "current output: %s, target output: %s",
    currentOutput1,
    targetOutput1
);
2
const currentOutput2 = getCardValue("6");
const targetOutput2 = 6;
console.assert(
    currentOutput2 === targetOutput2,
    "current output: %s, target output: %s",
    currentOutput2,
    targetOutput2
);
const currentOutput3 = getCardValue("hjhfk");
const targetOutput3 = "Invalid card rank.";
console.assert(
    currentOutput3 === targetOutput3,
    "current output: %s, target output: %s",
    currentOutput3,
    targetOutput3
);