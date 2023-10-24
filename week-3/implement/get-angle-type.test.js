const getAngleType = require ("./get-angle-type");

// to test five possible angles, I use for loop as follows;
const types = [
  "Acute angle",
  "Right angle",
  "Obtuse angle",
  "Straight angle",
  "Reflex angle",
];


test("Type of an angle", function () {
    for (let angle = 45, i = 0; angle <= 360, i < 5; angle += 45, i++){
        const currentOutput = getAngleType(angle);
        const targetOutput = types[i];
        expect(currentOutput).toBe(targetOutput);
    }});
  