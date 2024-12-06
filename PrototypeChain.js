// In JS inheritance is implemented using inherit one object to other objects
// one object can inherit properties of other
// In JS when we create any object that can inherit properties of parent using __proto__ property
// it finds wether proprty available in parent then in parent then in parent and so on.
// after that Object.prototype and last null

const obj = {
    a: 1,
    b: 2,
    __proto__: {
        b: 3,
        c: 4
    }
}

// in this prototype chain will looks like
// if obj wants to find c it check like
// checks Obj.[Prototype] have a and b
// obj.[Prototype].[Prototype] have b and c
// obj.[Prototype].[Prototype].[Prototype] is null

// Thus, the full prototype chain looks like:

// { a:1, b:2} --> { b: 3, c:4 } --> Object.prototype --> null

console.log(obj);


const o = {
    a: 1,
    b: 2,
    // __proto__ sets the [[Prototype]]. It's specified here
    // as another object literal.
    __proto__: {
      b: 3,
      c: 4,
      __proto__: {
        d: 5,
      },
    },
  };
  console.log(o);
  
  // { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> { d: 5 } ---> Object.prototype ---> null

// const parent = {
//   value: 2,
//   method() {
//     return this.value + 1;
//   },
// };

// console.log(parent.method()); // 3
// // When calling parent.method in this case, 'this' refers to parent

// // child is an object that inherits from parent
// const child = {
//   __proto__: parent,
// };
// console.log(child.method()); // 3
// // When child.method is called, 'this' refers to child.
// // So when child inherits the method of parent,
// // The property 'value' is sought on child. However, since child
// // doesn't have an own property called 'value', the property is
// // found on the [[Prototype]], which is parent.value.

// child.value = 4; // assign the value 4 to the property 'value' on child.
// // This shadows the 'value' property on parent.
// // The child object now looks like:
// // { value: 4, __proto__: { value: 2, method: [Function] } }
// console.log(child.method()); // 5
// Since child now has the 'value' property, 'this.value' means
// child.value instead

