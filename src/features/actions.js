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
    if (event.key === "s") {
        upBtn = document.querySelector(".down-btn")
        upBtn.classList.add("down-btn-active")
    }
    if (event.key === "d") {
        upBtn = document.querySelector(".right-btn")
        upBtn.classList.add("right-btn-active")
    }
    if (event.key === "a") {
        upBtn = document.querySelector(".left-btn")
        upBtn.classList.add("left-btn-active")
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
    if (event.key === "s") {
        upBtn = document.querySelector(".down-btn")
        upBtn.classList.remove("down-btn-active")
    }
    if (event.key === "d") {
        upBtn = document.querySelector(".right-btn")
        upBtn.classList.remove("right-btn-active")
    }
    if (event.key === "a") {
        upBtn = document.querySelector(".left-btn")
        upBtn.classList.remove("left-btn-active")
    }
})