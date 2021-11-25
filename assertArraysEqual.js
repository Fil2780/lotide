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
return eqArrays;
let resu = console.log(eqArrays);
}

const assertArraysEqual = function (resu, expected){
  if (resu)
  {
    return "As Expected!"
  }
  else {
    "Failed: Not Expected!"
  }
}
console.log(assertArraysEqual(([3,7], [3,6,7]), true));