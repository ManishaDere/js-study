// 'use strict';

// freeze - cannot edit properties, cannot delete properties, new properties are not added, 
// Prevents extensions and properties are non-writable and non-configurable 

const obj1 = {
    a: 1,
    b: 2
}
Object.freeze(obj1);
obj1.a = 3; // if we use strict mode at this point will this throws error that Cannot assign to readonly properties
console.log(obj1);// it will show same object obj1 with a: 1
delete obj1.b;
console.log("obj1 after delete ==>", obj1);
obj1.c = 10;
console.log("obj after adding new property ==>", obj1);

//assign - it creates two independant copies of objects
const obj2 = Object.assign({}, obj1);
//obj2 new object is created
obj2.a = 6;
console.log({
    obj1, obj2
});


// entries
const entriesArr = Object.entries(obj1);
// it returns [["a", 1], ["b", 2]]
console.log("entriesArr:", entriesArr);

//keys
const objKeys = Object.keys(obj1);
// it will returns keys array
console.log("objKeys:", objKeys);

obj1.c = 10;
console.log(obj1);

//seal - prevents extensions and properties are non-configurable and 
// we can edit existing properties, can not delete properties, new properties cannot be added 
const obj3 = {
    a:1,
    b:2
};
Object.seal(obj3);
delete obj3.a;
// it will show error in strict mode
// it will not remove property because of sealed
// we cannot create
console.log(obj3);
obj3.b = 4;
console.log(obj3);

