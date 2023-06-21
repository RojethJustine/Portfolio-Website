const hamburger = document.querySelector(".borgarcontainer")
const navMenu = document.querySelector("nav")


hamburger.addEventListener("click", e => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})



addEventListener("resize" , (e) => {
    navMenu.classList.remove("active");
})
