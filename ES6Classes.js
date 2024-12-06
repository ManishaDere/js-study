class Person {
    constructor(name) {
        this.name = name;
    }
    getDetails() {
        console.log("get details ==>", this.name);
    }
}

class Employee extends Person {
    constructor(name, age) {
        super(name);
        // this.name = name;
        this.age = age
    }
};

const e1 = new Employee("Manisha", 33);
e1.getDetails();

// const p1 = new Person("Manisha");
// console.log(p1.name);