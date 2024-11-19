const o1 = { a:1, b:{
    c: {
        d:7
    },
    e: {
        f: 0
    }
}};
const o2 = { a: 1, b: {
    c: {
        d: 7
    }, e: {
        f: 0
    }
}};

function deepClone(o1,o2) {
    // if(JSON.stringify(o1) === JSON.stringify(o2)) {
        if(typeof o1 !== typeof o2) {
            return false;
        }
        if(Object.keys(o1).length !== Object.keys(o2).length) {
            return false;
        }
        const keys1 = Object.keys(o1);
        const keys2 = Object.keys(o2);
        // pass o1[key] and o2[key] as parameter if its objects then it will recheck it again
        return keys1.every((key, index) => key === keys2[index] && deepClone(o1[key],o2[key]));
        // return true;
    // } else {
        // return false;
    // }
}

let val = deepClone(o1, o2);
console.log("Objects o1 and o2 are", val === true ? " same" : " different");
