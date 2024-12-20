const obj1 = {
    a:1,
    b:{
        version: 1
    }
}

// shallow clone

let shallowCopy = { ...obj1 };
shallowCopy.a = 9;
shallowCopy.b.version = 2;
console.log("obj1 ==>",obj1);
console.log("shallowCopy ==>", shallowCopy);
// Above version changed because it points to same memory location

// deep clone
// It creates completely independant objects
let employee = {
    name: "A",
    age: 23,
    details: function () {
        return this.name + " " + this.age;
    }
}
let newEmployee = JSON.parse(JSON.stringify(employee));
newEmployee.name = "B"; /// It will change to B and employee existing remains A
// Means completely differnt copies are created

console.log("emp1", employee);
console.log("new emp", newEmployee); // when we view this functions are lost as its not doing deep copy properly
// its disadvantage of this way
// we can use lodash deepClone function
console.log(employee.details());






