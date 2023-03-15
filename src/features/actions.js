document.addEventListener('keydown', function(event) {
    if (event.key === "j") {
        button1 = document.getElementById("button-1")
        button1.classList.add("active-button")
    }
    if (event.key === "k") {
        button2 = document.getElementById("button-2")
        button2.classList.add("active-button")
    }
    if (event.key === "w") {
        upBtn = document.querySelector(".up-btn")
        upBtn.classList.add("up-btn-active")
    }
})

document.addEventListener('keyup', function(event) {
    if (event.key === "j") {
        button1 = document.getElementById("button-1")
        button1.classList.remove("active-button")
    }
    if (event.key === "k") {
        button2 = document.getElementById("button-2")
        button2.classList.remove("active-button")
    }
    if (event.key === "w") {
        upBtn = document.querySelector(".up-btn")
        upBtn.classList.remove("up-btn-active")
    }
})