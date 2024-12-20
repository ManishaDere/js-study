const arr = [-1,-1,2,3,5,-2,3,22,53,22]
function removeDuplicate(arr1) {
  const obj = {};
  var count = 0;
  
  for (var i=0; i< arr1.length; i++) {
    var val = arr1[i];
    if(obj[val] === undefined) {
        obj[val] = 1;
    } else {
      ++obj[val];
    }
  }
  const newArr = [];
  for(var i=0; i< arr1.length; i++) {
    if(obj[arr1[i]] === 1) {
      newArr.push(arr1[i]);
    }
  }
  console.log("newArr ==>", newArr);
  
}
removeDuplicate(arr);

