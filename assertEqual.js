
const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`💚Assertion Passed: , ${actual}, === , ${expected}`);
  }
  else {
    console.log(`💔Assertion Failed: , ${actual}, !== , ${expected}`);
  }
  return assertEqual;
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Pho", "Pho");
assertEqual(1,1);
assertEqual(899,889);
