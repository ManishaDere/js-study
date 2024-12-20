const numbers = [1,2,1,3,2,4];
const uniqueArr = numbers.filter((item, index) => numbers.indexOf(item) === index)
console.log(uniqueArr);

let uniqueaArrUsingSet = [...new Set(numbers)];
console.log("uniqueaArrUsingSet ==>", uniqueaArrUsingSet);

// other method

function uniqueArray(arr) {
//   const uniqueArrElements = [...new Set(arr)];
//   const uniqueArrElements = arr.filter((item, index) => arr.indexOf(item) === index);
    const uniqueArrElements = [];
    for(var i=0; i<arr.length; i++) {
        if(!uniqueArrElements.includes(arr[i])) {
            uniqueArrElements.push(arr[i]);
        }
    }
    console.log(uniqueArrElements)
}



uniqueArray([1, 2, 3]); // [1, 2, 3]
uniqueArray([1, 1, 2]); // [1, 2]
uniqueArray([2, 1, 2]); // [2, 1]