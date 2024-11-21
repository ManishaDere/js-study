document.getElementById("event-delegation").addEventListener('click', function (event) {
    if(event.target.matches('li')) {
        console.log(`You clicked ${event.target.textContent}`);
    }
})

// event delegation internally utilizes event bubbling
// if anyone clicks on child then when we write parent event listener then automatically child gets noticed 