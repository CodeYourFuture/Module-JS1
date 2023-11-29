// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue

// You need to write assertions for your function to check it works in different cases

// Acceptance criteria:

// Given a card string in the format "A♠"  (representing a card in blackjack),
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

const faceCards = ["J", "K", "Q"]
function getCardValue(card){
    const cardRank = card.slice(0,1);
    if (cardRank === "A"){
        return 11;
    }
    else if ( Number(cardRank) >= 2 && Number(cardRank) < 11){
        return Number(cardRank)
    }
    else if (faceCards.includes(cardRank) ){
        return 10;
    }
    throw Error("Invalid card rank.");
}

// Handle Ace (A):

test("handle ace (A)", function () {

  //GIVEN 
const targetOutput = 11;
  const input="A♠";

  //WHEN
const currentOutput = getCardValue(input);

  //THEN

  expect(currentOutput).toBe(targetOutput);
});




// Handle Number Cards (2-10):

test("handle number cards", function () {

  //GIVEN 
  const targetOutput = 2;
  const input="2♠";

  //WHEN
  const currentOutput = getCardValue(input);

  //THEN
  expect(currentOutput).toBe(targetOutput);
});

// Handle Face Cards (J, Q, K):

test("handle face cards", function () {

  //GIVEN 
  const targetOutput = 10;
  const input="J♠";

  //WHEN
  const currentOutput = getCardValue(input);

  //THEN
  expect(currentOutput).toBe(targetOutput);
});

// Handle Invalid Card:

test("handle invalid cards", function () {

  //GIVEN 
  const targetOutput = "Invalid card rank.";
  const input="s♠";

  //WHEN -- getCardValue function needs to be passed as a parameter in expect function. (for error test!)
  const f = function () {
    getCardValue(input);
  };
  //THEN
  // expect(() => getCardValue(input)).toThrow(targetOutput); same thing but more tidy
  expect(f).toThrow(targetOutput);
});
