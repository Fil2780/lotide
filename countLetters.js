const countLetters = function (worLet){
  let mycount = {};
  for (i of worLet){
    
    if (mycount[i]) {
      mycount[i] += 1;
    }
    else {
      mycount[i]= 1;
    }
  
  }
  return mycount;
}
console.log (countLetters("ibbakfhjlasfdafs"));

// const assertEqual = function(actual,expected) {
//   if (actual === expected) {
//     console.log(`💚Assertion Passed: , ${actual}, === , ${expected}`);
//   }
//   else {
//     console.log(`💔Assertion Failed: , ${actual}, !== , ${expected}`);
//   }
//   return assertEqual;
// };
// assertEqual(result1["Ja"]), 1);