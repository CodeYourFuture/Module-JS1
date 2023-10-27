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

function getCardValue(cardValue){
    const cards2To9=['2','3','4','5','6','7','8','9'];
    const picturCards=['10','J','Q','K'];
    cardValue=cardValue[0];
    if(cards2To9.includes(cardValue)){
        return Number(cardValue);
    }
    else if(picturCards.includes(cardValue)){
        return 10;
    }
    else if(cardValue==='A'){
        return 11 ;
    }
    else {
        return new Error('Invalid card rank');
    }


}

module.exports = {
    getCardValue,
};



// console.assert(getCardValue('3♠')===3,'3 is not working');
// console.assert(getCardValue('Q♠')===10,'q is not working');
// console.assert(getCardValue('A♠')===11,'Ace is not working');
// console.assert(getCardValue('K♠')===10,'kings not working');
// console.assert(getCardValue('J')===10,'joker is not working');
// console.assert(getCardValue('h') instanceof Error, 'other card values are not working');
// console.assert(getCardValue(true) instanceof Error,'other card values are not working')
// console.assert(getCardValue('9')===9,'3 is not working');

