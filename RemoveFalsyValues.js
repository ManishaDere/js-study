let arr = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];
function  removeFalsy(arr) {
    const arrWithFalsyValsRemoved = [];
    arr.forEach(element => {
       if(element) {
          arrWithFalsyValsRemoved.push(element);
       } 
    });
    console.log(arrWithFalsyValsRemoved);
}
removeFalsy(arr);