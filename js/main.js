const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav__list");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-list__visible");
}
);

