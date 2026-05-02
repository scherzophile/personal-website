// We must make sure to show the animation each time :)
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};


//Get mouse pos for later
attop = false
window.addEventListener("mousemove", (event) => {
    // But also if the cursor is close to the top we have to show the bar too=
    y = event.clientY
    if (y < 75) {
        document.querySelector("nav").style.top = "0";
    } else if (attop) {
        document.querySelector("nav").style.top = "-60px";
    }
})


// Here's the nav showing behaviors
window.addEventListener("scroll", () => {
    if (window.scrollY === 0 || window.scrollY === null) {
        attop = true
        document.querySelector("nav").style.top = "-60px";
    } else {
        attop = false
        document.querySelector("nav").style.top = "0";
    }
})







// Here's the "scrolling to an element"

window.addEventListener("load", () => {
    document.querySelector(".nav-title").onclick = (() => {
        document.querySelector("#top-section").scrollIntoView({behavior: "smooth", block: "start"});
    })
    document.querySelector(".nav-about").onclick = (() => {
        const y = document.querySelector("#section-about").getBoundingClientRect().top + window.scrollY - 100
        window.scrollTo({ top: y, behavior: "smooth" })
    })
    document.querySelector(".nav-projects").onclick = (() => {
        const y = document.querySelector("#section-projects").getBoundingClientRect().top + window.scrollY - 150
        window.scrollTo({ top: y, behavior: "smooth" })
    })

    document.querySelector(".nav-achievements").onclick = (() => {
        const y = document.querySelector("#section-achievements").getBoundingClientRect().top + window.scrollY - 150
        window.scrollTo({ top: y, behavior: "smooth" })
    })

    document.querySelector(".nav-experience").onclick = (() => {
        const y = document.querySelector("#section-experience").getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top: y, behavior: "smooth" })
    })
    document.querySelector(".nav-languages").onclick = (() => {
        const y = document.querySelector("#section-languages").getBoundingClientRect().top + window.scrollY - 150
        window.scrollTo({ top: y, behavior: "smooth" })
    })
})
