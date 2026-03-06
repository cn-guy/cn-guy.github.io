//Handles right-nav menu + background blur

const navButton = document.getElementById('menu-toggle');
const blurBg = document.querySelector('.blur');

//Button triggered - register right nav as the menu being open
navButton.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
});

//Button triggered - add blur to the background
blurBg.addEventListener('click', () => {
    document.body.classList.toggle("menu-open");
});