
const countOnly = function(allItems, itemsToCount) {
  const results= {};
  for (const item of allItems) {
    if (itemsToCount[item])
      //console.log(item);
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }  
  }
  return results;
  }


const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`💚Assertion Passed: , ${actual}, === , ${expected}`);
  }
  else {
    console.log(`💔Assertion Failed: , ${actual}, !== , ${expected}`);
  }
  return assertEqual;
}
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);



//const countOnly = function(allItems, itemsToCount) {
  //   let arrItems = Object.keys(itemsToCount);
  //   let newObj = {};
  //   let count = 0;
  //   for (i=0; i < allItems.length; i++){
  //     for (j=0; j < arrItems.length; j++){
  //       if (allItems[i]=== arrItems[j]){
  //         itemsToCount[arrItems[j]] = count + 1;
  //         // if (count > 0){
  //         //   itemsToCount[(arrItems[j])] = count;  
  //         // }
          
  //       }
  //       else {
  //         brake; 
  //       }
  //     }
  //   } 
  //   return (newObj); 
  // }
  
  // console.log(countOnly([5, "jack","elsa" ,"jack", 7], {jack:5, elsa: 9, rosa:7}))
