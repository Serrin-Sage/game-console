document.addEventListener('keydown', function(event) {
    if (event.key === "j") {
        button1 = document.getElementById("button-1")
        console.log(button1)
        button1.classList.add("active-button")
        button1.classList.remove("active-button")
    }
})