let isSmallSize = true;

window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const gameName = urlParams.get("game");
  if (gameName) {
    document.getElementById("gameTitle").innerText = gameName;
  }
};

function startGame() {
  const frame = document.getElementById("gameFrame");
  const playButton = document.getElementById("playButton");
  const toolbar = document.getElementById("toolbar");
  const gameTitle = document.getElementById("gameTitle");

  frame.style.display = "block";
  playButton.style.display = "none";
  toolbar.style.display = "flex";
  gameTitle.style.display = "none";

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const gameName = urlParams.get("game");

  if (gameName) {
    const gameSrc = `/Games/${gameName}/index.html`;
    frame.src = gameSrc;
    document.title = gameName;
    gameTitle.innerText = gameName;
  }
}

function toggleSize() {
  const frame = document.getElementById("gameFrame");
  const fullscreenButton = document.getElementById("fullscreenButton");
  const homeButton = document.getElementById("homeButton");

  if (isSmallSize) {
    frame.style.position = "fixed";
    frame.style.top = "0";
    frame.style.left = "0";
    frame.style.width = "100vw";
    frame.style.height = "100vh";
    fullscreenButton.classList.add("fullscreen");
    homeButton.classList.add("hide");
    frame.classList.add("hide");
    isSmallSize = false;
  } else {
    frame.style.position = "relative";
    frame.style.width = "900px";
    frame.style.height = "500px";
    fullscreenButton.classList.remove("fullscreen");
    homeButton.classList.remove("hide");
    frame.classList.remove("hide");
    isSmallSize = true;
  }
}

function goHome() {
  window.location.href = "/pages/games.html";
}

window.addEventListener("message", function (event) {
  if (event.data === "gameStarted") {
    const playButton = document.getElementById("playButton");
    playButton.style.display = "none";
    const fullscreenButton = document.getElementById("fullscreenButton");
    fullscreenButton.style.display = "none";
  }
});
