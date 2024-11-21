// event bubbling => from element we clicked event travels to top like button => div => body => html
// event capturing => html => body => div => button clicked event ,...travels from top to bottom

document.getElementById("parent").addEventListener("click", function () {
    console.log("parent div clicked");
}, true);

document.getElementById("child").addEventListener("click", function (event) {
    console.log("child button clicked");
    // event.stopPropagation();
    // event stop propagation works in bubbling phase
}, true);


// if we provide third parameter as true then event capturing will get trigger
// by default third parameter id false
