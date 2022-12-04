const container1 = document.getElementById("container1")
const container2 = document.getElementById("container2")
const prevBtn = document.querySelectorAll(".prev")
const nextBtn = document.querySelectorAll(".next")

nextBtn.forEach((nextBtn) => {
    nextBtn.addEventListener("click", (e) => {
        let parentContainer = e.currentTarget.parentNode.parentNode.parentNode
        if (parentContainer === container1) {
            container1.classList.add("hide")
            container1.classList.remove("fade-in")
            container2.classList.remove("hide")
            container2.classList.add("fade-in")
        } else {
            container2.classList.add("hide")
            container2.classList.remove("fade-in")
            container1.classList.remove("hide")
            container1.classList.add("fade-in")
        }
    })
})

prevBtn.forEach((prevBtn) => {
    prevBtn.addEventListener("click", (e) =>{
        let parentContainer = e.currentTarget.parentNode.parentNode.parentNode
        if (parentContainer === container1) {
            container1.classList.add("hide")
            container1.classList.remove("fade-in")
            container2.classList.remove("hide")
            container2.classList.add("fade-in")
        } else {
            container2.classList.add("hide")
            container2.classList.remove("fade-in")
            container1.classList.remove("hide")
            container1.classList.add("fade-in")
        }
    })
})