
var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Web Developer", "Wordpress Expert"],
    typeSpeed: 100,
    Backspeed: 60,
    loop: true
})

const nav = document.querySelector(".nav");
let allSections = document.querySelectorAll(".section")
navList = nav.querySelectorAll("li");
totalNavList = navList.length;

for (let i = 0; i < totalNavList; i++) {
    const navItemLink = navList[i].querySelector("a");
    navItemLink.addEventListener("click", (e) => {
        allSections.forEach((eachSec) => {
            eachSec.classList.remove("back-section")
        })
        navList.forEach(eachEL => {
            if (eachEL.querySelector("a").classList.contains("active")) {
                const target = eachEL.querySelector("a").getAttribute("href");
                document.querySelector(target).classList.add("back-section")

            }
            eachEL.querySelector("a").classList.remove("active")
        });
        e.target.classList.add("active")

        allSections.forEach((section) => {
            section.classList.remove("active")
        })
        showSection(e.target)
    })
}

function showSection(element) {
    const target = element.getAttribute("href");
    document.querySelector(target).classList.add("active")

}

function updateNav(element) {
    navList.forEach((navItem) => {
        navItem.querySelector("a").classList.remove("active")
        const button = element.getAttribute("href");
        const nav = navItem.querySelector("a").getAttribute("href");
        if (button === nav) {
            navItem.querySelector("a").classList.add("active")
        }
    })
}

const hireMe = document.querySelector(".hire-me")
hireMe.addEventListener("click", (e) => {
    const sectionIndex = e.target.getAttribute("data-section-index")
    console.log(sectionIndex)
    showSection(e.target)
    updateNav(e.target)
})

let navToggleBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navToggleBtn.addEventListener('click', () => {
    aside.classList.toggle("open")
    navToggleBtn.classList.toggle("active")
    allSections.forEach((eachSec) => {
        eachSec.classList.toggle("push")
    })

})


