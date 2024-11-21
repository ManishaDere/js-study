// In js this refers to below places
// 1
console.log(this); // it will display window in browsers and global in nodejs

//2
function add() {
    console.log(this);
}
add(); // Here this refers to context in which function is called


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
obj2.displayName(); // this will display undefined. as it will try to find name in global context.
// Here this refers to context from where the object is define
// and method is called

// 5.bind, call, apply

function greet(greeting) {
    console.log(`${greeting}, I am ${this.name}`)
}

const person = {
    name: "Manisha",
}
// bind - it passes current execution context and returns new function
const greetNew = greet.bind(person);
greetNew("Hey"); // output will be - Hey, I am Manisha

//call and apply
greet.call(person, "Hellow");
greet.apply(person, ["Hello"]);

// 6. eventlisteners
// in eventlisteners if we try to get to get this it will be that particular element whose event is called
document.querySelector("button").addEventListener("click", function () {
    console.log(this); // Output: The button element
});

// 7. In class or function newly created object is this
function Person(name) {
    this.name = name;
}

const p1 = new Person("Manisha");
console.log(p1.name);