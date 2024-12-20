const arr = [1, [2, 3], 4, [6, 7, [8]]];
// using reduce
function flat1(arr) {
    return arr.reduce((acc, current) => {
        if(Array.isArray(current)){
            acc.push(...flat1(current))
        } else {
            acc.push(current);
        }
        return acc;
    }, [])
}

// using forEach
// function flat(arr) {
//     let flattenedArr = [];
//     arr.forEach(element => {
//         if(Array.isArray(element)) {
//             flattenedArr.push(...flat(element));
//         } else {
//             flattenedArr.push(element);
//         }
//     }) 
//     return flattenedArr;
// }


let flattnArr1 = flat1(arr);
console.log("flattnArr1 ==>", flattnArr1);
