
const darkModeInput = document.querySelector('#darkmode');

darkModeInput.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('dark');

});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
    });
});