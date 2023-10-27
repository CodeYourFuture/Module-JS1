const getCardValue = require("./get-card-value");

test("card value for Q ", () => {
  expect(getCardValue("Q")).toEqual(10);
});

test("card value for K", () => {
  expect(getCardValue("K")).toEqual(10);
});

test("card value for J", () => {
  expect(getCardValue("J")).toEqual(10);
});

test("card value for A ", () => {
  expect(getCardValue("A")).toEqual(11);
});
