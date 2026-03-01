const navButton = document.getElementById('menu-toggle');

navButton.addEventListener("click", () => {
    const rightNavItems = document.querySelector(".right-nav");
    rightNavItems.classList.toggle("active");
})