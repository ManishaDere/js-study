const arr1 = [1,2,3,4,5];
const arr2 = [3,4,6,7];

// output : [3,4]

const intersectedArr = arr1.filter((item) => arr2.includes(item));
console.log("intersectedArr:", intersectedArr)