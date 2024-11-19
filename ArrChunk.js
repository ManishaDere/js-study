function chunkArr(arr, chunkSize) {
    let chunkedArr = [];
    for(var i=0; i<= arr.length; i+= chunkSize) {
        chunkedArr.push(arr.slice(i, i+chunkSize));
    }
    console.log("chunkedArr ==>", chunkedArr);
}
console.log("Test");
chunkArr([1,2,3,4,5,6,7,8,9,10], 3);