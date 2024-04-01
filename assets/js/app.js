let menuIcon = document.querySelector(".menuIcon");
let menuList = document.querySelector(".menubar");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show")
})