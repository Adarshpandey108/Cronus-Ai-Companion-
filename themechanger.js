
const colorToggleBtn = document.createElement("button");
colorToggleBtn.classList.add("color-toggle");

const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
    <path d="M12 2a1 1 0 010 2 8 8 0 108 8 1 1 0 012 0 10 10 0 11-10-10zm0 6a6 6 0 100 12 6 6 0 000-12z" />
</svg>`;
const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" width="24" height="24">
    <path d="M12 4a1 1 0 010-2 1 1 0 010 2zm0 18a1 1 0 010-2 1 1 0 010 2zM4 12a1 1 0 01-2 0 1 1 0 012 0zm18 0a1 1 0 01-2 0 1 1 0 012 0zM6.343 6.343a1 1 0 01-1.414 1.414 1 1 0 011.414-1.414zM17.657 17.657a1 1 0 01-1.414 1.414 1 1 0 011.414-1.414zM6.343 17.657a1 1 0 01-1.414-1.414 1 1 0 011.414 1.414zM17.657 6.343a1 1 0 01-1.414-1.414 1 1 0 011.414 1.414zM12 8a4 4 0 100 8 4 4 0 000-8z" />
</svg>`;

colorToggleBtn.innerHTML = moonIcon; 
document.body.appendChild(colorToggleBtn);

// Add event listener for color change
let isDarkMode = true;

colorToggleBtn.addEventListener("click", () => {
    if (isDarkMode) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        colorToggleBtn.innerHTML = sunIcon; // Switch to sun icon
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        colorToggleBtn.innerHTML = moonIcon; // Switch to moon icon
    }
    isDarkMode = !isDarkMode;
});
