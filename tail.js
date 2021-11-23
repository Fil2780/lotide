const assertEqual = function(actual, expected) {
  const tail = function(actual) {
    let act = actual.slice(1);
    return (act);
  };
  console.log(tail(actual));
  if (actual === expected) {
    console.log(`💚Assertion Passed: , ${actual.slice(1)}, === , ${expected}`);
  }
  else {
    console.log(`💔Assertion Failed: , ${actual.slice(1)}, !== , ${expected}`);
  }
  return assertEqual;
};


assertEqual([2, 4 ,7], [4,7]);
assertEqual(["mcd", "harvey", "kfc"], ["mcd", "harvery"]);
assertEqual(["cat","dog","eguana"], ["dog","eguana"]);
assertEqual([],0);