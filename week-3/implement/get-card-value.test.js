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

function getCardValue(cardString){

    if (cardString > 1 && cardString < 11)
    return +cardString;

    else if (cardString === 'J' || cardString === 'Q' || cardString === 'K')
    return 10

    else if (cardString === 'A')
    return 11

    else
    return 'Invalid card rank'
       
    }

    // console.log(getCardValue(10));
    // console.log(getCardValue('J'));
    // console.log(getCardValue('A'));
    // console.log(getCardValue('Z'));

// const currentOutput = getCardValue('K');
// const targetOutput = 5
// const targetOutput1 = 10
// const targetOutput2 = 11
// const targetOutput3 = "Invalid card rank"

// console.assert(
//     currentOutput === targetOutput,
//     `current output: ${currentOutput}, target output: ${targetOutput}`
// )
// console.assert(
//     currentOutput === targetOutput1,
//     `current output: ${currentOutput}, target output: ${targetOutput1}`
// )
// console.assert(
//     currentOutput === targetOutput2,
//     `current output: ${currentOutput}, target output: ${targetOutput2}` 
// )
// console.assert(
//     currentOutput === targetOutput3,
//     `current output: ${currentOutput}, target output: ${targetOutput3}`
// );

test("checks card value", function () {
    expect(getCardValue(10)).toBe(10);
    expect(getCardValue(`J`)).toBe(10);
    expect(getCardValue(`A`)).toBe(11);
    expect(getCardValue(`Z`)).toBe('Invalid card rank');
  });