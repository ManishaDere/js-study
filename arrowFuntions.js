// Arrow functions inherit the this value from their surrounding scope.
var userName = "John";

var person = {
    userName: "Manisha",
    getDetails: function() {
        console.log("user: ", this.userName);
    },
    getName: () => {
        console.log("Name: ", this.userName);
    }
}

person.getDetails();

/// It will display John because arrow function refers to the context in which it is called
// currently person is defined in window context so its using userName as John 
person.getName();