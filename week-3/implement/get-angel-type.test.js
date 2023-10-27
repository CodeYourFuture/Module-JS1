const getAngleType = require("./get-angle-type");

test("getAngleType", () => {
  expect(getAngleType(90)).toBe("Right angle");
});

test("getAngleType", () => {
  expect(getAngleType(45)).toBe("Acute angle");
});

test("getAngleType", () => {
  expect(getAngleType(135)).toBe("Obtuse angle");
});

test("getAngleType", () => {
  expect(getAngleType(180)).toBe("Straight angle");
});

test("getAngleType", () => {
  expect(getAngleType(270)).toBe("Reflex angle");
});

test("getAngleType", () => {
  expect(getAngleType(270)).toBe("Reflex angle");
});

// test("getAngleType", () => {
//   expect(getAngleType("invalid")).toBe(
//     "Value should be a number between 0 & 360"
//   );
// });
