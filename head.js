
const assertEqual = function(actual, expected) {
  const head = function(actual) {
    return (actual[0]); 
  }
  console.log (head(actual));
  if (actual[0] === expected) {
    console.log(`💚Assertion Passed: , ${actual[0]}, === , ${expected}`);
    }
    else {
    console.log(`💔Assertion Failed: , ${actual[0]}, !== , ${expected}`);
    }
  return assertEqual;
};


assertEqual([2, 4 ,7], 2);
assertEqual(["mcd", "harvey", "kfc"], "mcd");
assertEqual(["cat","dog","eguana"], "eguana");
assertEqual ([],0);
