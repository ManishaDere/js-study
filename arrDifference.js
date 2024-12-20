console.log("Hey i am on page");

const a1 = [1,2,3,4];
const a2 = [3,4,5];

const filteredArr = a1.filter(item => item.length && !item.includes(a2));
console.log("filteredArr ==>", filteredArr);


// function difference(a,b) {
//     const diffArr = a.filter((item, index) => !b.includes(item));
//     console.log("diffArr ==>", diffArr)
//   }
  
  
  
//   difference([1, 2, 3], [2, 3]); // => [1]
//   difference([1, 2, 3, 4], [2, 3, 1]); // => [4]
//   difference([1, 2, 3], [2, 3, 1, 4]); // => []
//   difference([1, , 3], [1]); // => [3]