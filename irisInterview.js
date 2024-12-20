// var obj1 = {
// age: 22,
// getAge:function (){
//   return this.age
// }
// }
// const obj2 = obj1.getAge; 
// console.log(obj2());

// begins
// 2nd Promise
// end
// 1st settimeout
// 1st Promise
// 2nd settimeout
// 2nd Promise then
// 2nd Promise settimeout
 
console.log('begins');
setTimeout(() => {
  console.log('1st settimeout');
  Promise.resolve('success').then(() => { // this will execute once promise is resolved
    console.log('1st Promise');
  });
});
new Promise((resolve, reject) => { // this is promise executer function so executes immediately
  console.log('2nd Promise');
  setTimeout(() => {
    console.log('2nd settimeout');
    resolve('2nd Promise settimeout');
  });
}).then((res) => {
  console.log('2nd Promise then');
  console.log(res);
});
console.log('end')
 