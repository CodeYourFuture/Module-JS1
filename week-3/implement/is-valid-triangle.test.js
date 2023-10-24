const isValidTriangle = require ("./is-valid-triangle");

test ("validating triangles", function (){
    const currentOutput = isValidTriangle(4,3,5);
    const targetOutput = "valid triangle";

    expect(currentOutput).toBe(targetOutput);
});