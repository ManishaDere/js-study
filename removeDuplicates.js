function removeDuplicates(arr) {
    // const filtered = arr.filter((item, index) => arr.indexOf(item) === index);
    const filtered = [];
    for(var i=0; i< arr.length; i++) {
        if(!filtered.includes(arr[i])) {
            filtered.push(arr[i]);
        }
    }
    console.log(filtered);
}

const arr = [1,1,2,3,4,5,5,6];
removeDuplicates(arr);