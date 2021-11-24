const eqArrays = function(arr1, arr2) {
  const assertEqual = function(eqArrays) { 
    if (arr1 === arr2) {
      console.log(`💚Assertion Passed: , ${arr1}, === , ${arr2}`);
    }
    else {
      console.log(`💔Assertion Failed: , ${arr1}, !== , ${arr2}`);
    }
    return assertEqual;
  }  
};
console.log(eqArrays([1, 2, 3], [1, 2, 3]), true);