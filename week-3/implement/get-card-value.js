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


function getCardValue(card){
    let string = "A♥, A♦, A♣, A♠";
    if (string.includes(card)){
        return Number(card)
    }else if (/^[2-9]|10$/.test(card)) {
        return +card;
    }else if (card === "J" || card === "Q" || card === "K"){
        return 10;
    }else if (card === "A") {
        return 11;
    }else{
        return "Invalid card rank."
    }
}

function assertion(card, targetOutput) {
  const currentOutput = getCardValue(card);
  console.log(
    currentOutput === targetOutput,
    `Test for ${card}. Current output: %s, target output: %s`,
    currentOutput,
    targetOutput
  );
}

assertion(getCardValue("J")) //output ; 10
assertion(getCardValue("A")) //output ; 11
assertion(getCardValue("4")) //output ; 4




// here is the explanation for line 39 (+card)

let card = "10";
let cardAsNumber = +card;

console.log(cardAsNumber); // Output: 10
console.log(typeof cardAsNumber); 