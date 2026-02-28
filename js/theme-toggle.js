const button = document.getElementById("theme-toggle");

button.addEventListener("click", () => {
    //Change the theme
    const elem = document.querySelector("html")
    currentTheme = elem.getAttribute("theme")

    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    //Change button text
    const newButtonText = newTheme === "dark" ? "light" : "dark";
    button.setAttribute("aria-label", newButtonText);
    button.textContent = newButtonText;

    //Change the theme in CSS
    document.querySelector("html").setAttribute("theme", newTheme);
});