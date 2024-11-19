const arr = [1, [2, 3], 4, [6, 7, [8]]];
// using reduce
function flat1(arr) {
    return arr.reduce((acc, element) => {
        if(Array.isArray(element)) {
            acc.push(...flat1(element))
        } else {
            acc.push(element)
        }
        return acc;
    }, []);
}

// using forEach
function flat(arr) {
    let flattenedArr = [];
    arr.forEach(element => {
        if(Array.isArray(element)) {
            flattenedArr.push(...flat(element));
        } else {
            flattenedArr.push(element);
        }
    }) 
    return flattenedArr;
}


let flattnArr1 = flat(arr);
console.log("flattnArr1 ==>", flattnArr1);
