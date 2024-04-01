window.addEventListener("load", function (
) {

if (!localStorage.getItem('redirected')) {
        window.location.href = '/pages/educational_Portal.html';
        localStorage.setItem('redirected', true);
    }


const searchInput = document.getElementById("search-input");
    const gameContainer = document.getElementById("gameContainer");
    const gameButtons = document.querySelectorAll(".Game_Button");
    const splashScreen = document.getElementById("splashScreen");
    const mainContent = document.getElementById("mainContent");

searchInput.addEventListener("input", function (
) {
        const searchTerm = searchInput.value.trim().toLowerCase();

        gameButtons.forEach((button) => {
            const gameName = button.querySelector("img").alt.toLowerCase();
            if (gameName.includes(searchTerm)) {
                button.style.display = "inline-block";
            } else {
                button.style.display = "none";
            }
        });
    });


setTimeout(() => {
        splashScreen.style.animation = "slidedown 0.9s ease-in-out forwards";

        splashScreen.addEventListener("animationend", function (
) {
            splashScreen.style.display = "none";
            mainContent.style.display = "block";
        });
    }, 1700);
});
