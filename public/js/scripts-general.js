// scripts-general.js
function showScreen(screenId) {
    document.querySelectorAll(".section").forEach(section => section.classList.remove("active"));
    const screen = document.getElementById(screenId);
    if (screen) screen.classList.add("active");
}

function backToMenu() {
    document.querySelectorAll(".section").forEach(section => section.classList.remove("active"));
}

document.addEventListener("DOMContentLoaded", () => {
    backToMenu();
});
