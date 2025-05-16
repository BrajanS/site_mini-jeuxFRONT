const gamesList = [
  { game: "PPC", game_id: 0 },
  { game: "P4", game_id: 1 },
];

const gameButtons = games.querySelectorAll("#games > button");
const gamesContainer = document.getElementById("games");
gameButtons.forEach((button, btnNum) => {
  button.addEventListener("click", () => {
    let gameNum = gamesList[btnNum].game_id;
    if (btnNum === gameNum) {
      gamesContainer.classList.add("hiddenOn");
      // Game Launch
      openGame(gamesList[btnNum]);
    } else {
      console.log("Error, the Button doesn't match the game");
    }
  });
});

function openGame(chosenGame) {
  // Game is PPC
  if (chosenGame.game === "PPC") {
    console.log(chosenGame);
    const main = document.querySelector("main");
    const gameMenu = document.createElement("div");
    const gameZone = document.createElement("div");
    const gameNav = document.createElement("div");
    gameMenu.id = "gameMenu";
    gameZone.id = "gameZone";
    gameNav.id = "gameNav";
    main.appendChild(gameMenu);
    gameMenu.appendChild(gameZone);
    gameMenu.appendChild(gameNav);
    // Game contents
    const screen = document.createElement("div");
    screen.id = "screen";
    gameZone.appendChild(screen);

    // Game Title and others
    const exitGame = document.createElement("button");
    const gameTitle = document.createElement("h3");
    const fullScreen = document.createElement("button");

    gameTitle.textContent = "Pierre Papier Ciseau";
    gameNav.appendChild(exitGame);
    gameNav.appendChild(gameTitle);
    gameNav.appendChild(fullScreen);

    // Images
    const exitImg = document.createElement("img");
    const resize = document.createElement("img");
    exitImg.src = "../ressources/images/exit-svgrepo-com.png";
    resize.src = "../ressources/images/resize.png";
    exitGame.appendChild(exitImg);
    fullScreen.appendChild(resize);

    exitGame.addEventListener("click", () => {
      const gameMenu = document.getElementById("gameMenu");
      gamesContainer.classList.remove("hiddenOn");
      console.clear();
      gameMenu.remove();
    });
  }
  // Game is P4
  else if (chosenGame.game === "P4") {
    console.log("hi");
    const main = document.querySelector("main");
    const gameMenu = document.createElement("div");
    gameMenu.id = "gameMenu";
    main.appendChild(gameMenu);
    console.log(chosenGame);
  }
}
