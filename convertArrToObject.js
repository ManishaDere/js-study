// function objectMap(obj, fn) {
//   return Object.fromEntries(
//     Object.entries(obj).map(([key, value]) => [key, fn.call(obj, value)]),
//   );
// }

function triple(item) {
    return item * 3;
  }
  
  // console.log(objectMap({a:3, b: 5}, triple));
  
  const obj = {
    a:5,
    b:6,
    c: {
      d:1
    }
  }
  const arr = Object.entries(obj);
  console.log(arr);
  const newArr = arr.map((item)=> {
    if(item[1])
        return [ item[0], typeof item[1] !== 'object' ? triple(item[1]) : item[1]]
    });
  console.log(newArr)
  const newObj = Object.fromEntries(newArr);
  console.log("newObj ==>", newObj);
  