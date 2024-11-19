var userName = "Sooraj";

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

/// It will display Sooraj because arrow function refers to the context in which it is called
// currently person is defined in window context so its using userName as sooraj 
person.getName();