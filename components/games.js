const gamesList = [
  { game: "PPC", game_id: 0 },
  { game: "P4", game_id: 1 },
];

const gameButtons = games.querySelectorAll("#games > button");
gameButtons.forEach((button, btnNum) => {
  const gamesContainer = document.getElementById("games");
  button.addEventListener("click", () => {
    let gameNum = gamesList[btnNum].game_id;
    if (btnNum === gameNum) {
      /*console.log(
        `btnNum: ${btnNum} & game_id: ${gameNum} / ${gamesList[btnNum].game}`
      );*/
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
    gameMenu.id = "gameMenu";
    main.appendChild(gameMenu);
    const gameZone = document.createElement("div");
    const gameNav = document.createElement("div");
    gameZone.id = "gameZone";
    gameNav.id = "gameNav";
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

    exitGame.textContent = "Leave";
    gameTitle.textContent = "Pierre Papier Ciseau";
    fullScreen.textContent = "Full";

    gameNav.appendChild(exitGame);
    gameNav.appendChild(gameTitle);
    gameNav.appendChild(fullScreen);
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
