const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");
styleSwitcherToggle.addEventListener("click", () => {
    styleSwitcher.classList.toggle('open')
})


window.addEventListener('scroll', () => {
    if (styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open")
    }
})


const alternativeStyles = document.querySelectorAll(".alternate-style")

function setActiveStyle(color) {
    alternativeStyles.forEach((eachColor) => {
        if (color === eachColor.getAttribute("title")) {
            eachColor.removeAttribute("disabled")
        } else {
            eachColor.setAttribute("disabled", "true")
        }
    })
}

let dayNight = document.querySelector(".day-night")

dayNight.addEventListener('click', () => {
    let icon = dayNight.querySelector('i')

    icon.classList.toggle("fa-sun")
    icon.classList.toggle("fa-moon")
    document.body.classList.toggle("dark")

    // if (icon.classList.contains('fa-moon')) {
    //     icon.classList.remove("fa-moon")
    //     icon.classList.add("fa-sun")
    //     document.body.classList.add("dark")
    // } else {
    //     icon.classList.remove("fa-sun")
    //     icon.classList.add("fa-moon")
    //     document.body.classList.remove("dark")
    // }
})

window.addEventListener("load", () => {
    let icon = dayNight.querySelector("i")
    if (document.body.classList.contains("dark")) {
        icon.classList.add("fa-sun")
    } else {
        icon.classList.add("fa-moon")
    }
})