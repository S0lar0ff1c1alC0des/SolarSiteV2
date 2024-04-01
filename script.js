
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
