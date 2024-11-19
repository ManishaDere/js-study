var clickMe = document.getElementById("clickMe");
function abc() {
    let count = 0;
    if(clickMe) {
        clickMe.addEventListener('click', function () {
            console.log("Btn clicked", ++count);
        }, false);
    }
};
abc();
clickMe.removeEventListener('click');
