// In js this refers to below places
// 1
console.log(this); // it will display window in browsers and global in nodejs

//2
function add() {
    console.log(this);
}
add(); // Here this refers to context inwhich function is called


//3 
var obj1 = {
    name: "ABC",
    displayName: function displayName() {
        console.log(this.name);
    }
} 
obj1.displayName(); // this will display ABC this name. 
// here this refers to object from which function is called

//4
var obj2 = {
    name: "ABC",
    displayName: () => {
        console.log(this.name);
    }
} 
obj1.displayName(); // this will display undefined. as it will try to find name in global context.
// Here this refers to context from where the object is define
// and method is called

// bind, call, apply

