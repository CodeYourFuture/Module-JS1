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
}

// Extracting the rank part of the card string
if (/[2-9]|10/.test(rank)) {
    // Handle Number Cards (2-10)
    return parseInt(rank, 10);
} else if (/^[JQK]$/.test(rank)) {
    // Handle Face Cards (J, Q, K)
    return 10;
} else if (rank === 'A') {
    // Handle Ace (A)
    return 11;
} else {
    // Handle Invalid Cards
    throw new Error("Invalid card rank.");
}


// Assertions for each acceptance criterion

// Test for Numeric Card
const numericCardTest = getCardValue("5♠");
console.assert(
    numericCardTest === 5,
    `Expected 5 for numeric card, but got ${numericCardTest}`
);

// Test for Face Card
const faceCardTest = getCardValue("Q♦");
console.assert(
    faceCardTest === 10,
    `Expected 10 for face card, but got ${faceCardTest}`
);

// Test for Ace
const aceCardTest = getCardValue("A♥");
console.assert(
    aceCardTest === 11,
    `Expected 11 for Ace, but got ${aceCardTest}`
);

// Test for Invalid Card
console.assert(
    () => getCardValue("X♣"),
    new Error("Invalid card rank."),
    "Function did not throw expected error for invalid card"
);
