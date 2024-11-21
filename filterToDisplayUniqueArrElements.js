const numbers = [1,2,1,3,2,4];
const uniqueArr = numbers.filter((item, index) => numbers.indexOf(item) === index)
console.log(uniqueArr);

let uniqueaArrUsingSet = [...new Set(numbers)];
console.log("uniqueaArrUsingSet ==>", uniqueaArrUsingSet);