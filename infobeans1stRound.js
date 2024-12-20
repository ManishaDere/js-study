
//Prototype chain
//object literal notation
const obj1 = {
    a: 1,
    b: 2,
    __proto__: {
      c:3,
    }
  }
  
  console.log(obj1);
  console.log(obj1.c);
  obj1.getValues = function(){
    console.log("a==>", this.a);
    console.log("b==>", this.b);
    console.log("c==>", this.c);
  }
  obj1.getValues();
  
//   obj1.[Prototype].[Prototype]
  // ES5 object create using function based
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  const obj2 = new Person("Manisha", 30);
  obj2.displayName = function (){
      console.log("Name:", this.name)
    }
  obj2.displayName();
  //ES6 inheritance
  class Person {
    constructor(name) {
  //     super();
      this.name = name;
    }
    getName() {
      console.log(this.name);
    }
  }
  const p1 = new Person("Manisha");
  p1.getName();
  class Employee extends Person {
    constructor(name, age) {
      super(name);
      this.age = age;
    }
    getAge() {
      console.log("My age is ", this.age)
    }
  }
  
  const e1 = new Employee("Anushka", 30);
  e1.getName();
  e1.getAge();
  
  // == and === operators difference
  // let a = 1;
  // let b= new Number(1);
  // let c = b;

//   what will be the output for 
  let a = 1;
  let b = new Number(1);
  let c = b;

//   what will be the output for 
console.log(a==b); // returns true because it checks only values but not types
console.log(a===b); // b is of object type so it returned false
console.log(b===c); // both are at different memory location so returned true