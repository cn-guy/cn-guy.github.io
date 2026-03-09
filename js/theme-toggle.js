//Handles theme toggling

const button = document.getElementById("theme-toggle");

button.addEventListener("click", () => {
    //Determine which theme to change to
    const elem = document.querySelector("html");
    currentTheme = elem.getAttribute("theme");

    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    //Change to the new theme by setting the class = 'dark-mode'
    document.querySelector("html").setAttribute("theme", newTheme);

    document.body.classList.toggle('dark-mode');
});