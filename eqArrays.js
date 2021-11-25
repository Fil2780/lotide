
const assertEqual = function(eqArrays,expected) {
  if (eqArrays) {
    console.log(`💚Assertion Passed: , ${eqArrays}, === , ${expected}`);
  }
  else {
    console.log(`💔Assertion Failed: , ${eqArrays}, !== , ${expected}`);
  }
  return assertEqual;
}
const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (i =0; i < arr1.length; i++){
      if (arr1[i] !== arr2[i]){
        return "false";
      }
    }
      return "true";
  }
  else {
    return "false";
  }
  let resu=console.log(eqArrays)
  return resu;
}

console.log(assertEqual(eqArrays([3,5,6,7], [3,5,6,7]), true));