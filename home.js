window.addEventListener("load", function (
) {

if (!localStorage.getItem('redirected')) {
        window.location.href = '/pages/educational_Portal.html';
        localStorage.setItem('redirected', true);
    }




setTimeout(() => {
        splashScreen.style.animation = "slidedown 0.9s ease-in-out forwards";

        splashScreen.addEventListener("animationend", function (
) {
            splashScreen.style.display = "none";
            mainContent.style.display = "block";
        });
    }, 1700);
});
