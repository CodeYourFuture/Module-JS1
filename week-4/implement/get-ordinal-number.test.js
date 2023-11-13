// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(){
   return "2nd";
}
Test("convert 2 to an ordinal number", function(){
  const input = 2;
  const currentOutput =getOrdinalNumber(input);
  const targetOutput = "2nd";

  expect(currentOutput).toBe(targetOutput);
})
  
  
  
  
 
