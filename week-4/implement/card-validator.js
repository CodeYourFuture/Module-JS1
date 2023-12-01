// Number must be 16 digits, all of them must be numbers.
// - You must have at least two different digits represented (all of the digits cannot be the same).
// - The final digit must be even.
// - The sum of all the digits must be greater than 16.
function addingCard(card) {
    // typeof card === 'number' ;
    const num = String(card).split("").map(Number);
    
    let add = 0;

    for (let i = 0; i < num.length - 1; i += 2) {
        add += num[i] + num[i + 1];
    }

    return add;
}

function creditCard(card) {
    const num = String(card).split("").map(Number);

    if (num.length >= 16 && new Set(num).size >= 2 && addingCard(card) >= 16) {
        return "card is valid";
    } else {
        return "card is not valid";
    }
}

// console.log(creditCard('26287476788868563215'));
test("check if card is valid", function () {
    const card= '26287476788868563215';
    const currentOutput = creditCard(card);
    const targetOutput = "card is valid";
  
    expect(currentOutput).toBe(targetOutput);

});
