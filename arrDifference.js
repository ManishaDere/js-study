console.log("Hey i am on page");

const a1 = [1,2,3,4];
const a2 = [3,4,5];

const filteredArr = a1.filter(item => item.length && !item.includes(a2));
console.log("filteredArr ==>", filteredArr);