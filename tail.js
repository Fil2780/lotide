const tail = function (toTail){
  let modTail = toTail.slice(1);
  //console.log (modTail);
}
let actual = console.log(tail);
const assertEqual = function(actual,expected) {
  if (actual.length === expected.length) {
    console.log(`💚Assertion Passed: , ${actual}, === , ${expected}`);
  }
  else {
    console.log(`💔Assertion Failed: , ${actual}, !== , ${expected}`);
  }
  return assertEqual;
};
assertEqual([2, 4 ,7], [4,7]);
assertEqual(["mcd", "harvey", "kfc"], ["mcd"]);
assertEqual(["cat","dog","eguana"], ["dog","eguana"]);
assertEqual ([],[]);