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
    const { gameZone, gameNav } = createGamesStructure();
    // #region Game contents
    const screen = document.createElement("div");
    const actionsMenu = document.createElement("div");
    const turnActionsButton = document.createElement("button");
    const turnActionsImg = document.createElement("img");
    let screenWidth = 820;
    screen.id = "screenPpc";
    screen.style.width = `${screenWidth}px`;
    actionsMenu.id = "actionsMenu";
    turnActionsImg.src = "../ressources/images/turnActions.png";
    gameZone.appendChild(screen);
    gameZone.appendChild(actionsMenu);
    const ppcMenu = document.createElement("div");
    ppcMenu.id = "ppcMenu";
    screen.appendChild(ppcMenu);
    const ppcTitle = document.createElement("span");
    ppcTitle.textContent = "Rock Paper Scissors";
    ppcMenu.appendChild(ppcTitle);
    const ppcModes = document.createElement("div");
    ppcModes.id = "ppcModes";
    ppcMenu.appendChild(ppcModes);
    const ppcModesTitle = document.createElement("h3");
    ppcModesTitle.textContent = "Play mode:";
    ppcModes.appendChild(ppcModesTitle);
    const ppcModesContainer = document.createElement("div");
    ppcModesContainer.id = "ppcModesContainer";
    ppcModes.appendChild(ppcModesContainer);
    const ppcModePlayer = document.createElement("button");
    const ppcModeNpc = document.createElement("button");
    ppcModePlayer.textContent = "Versus Player";
    ppcModeNpc.textContent = "Versus NPC";
    ppcModesContainer.append(ppcModePlayer, ppcModeNpc);

    ppcModeNpc.addEventListener("click", () => {
      console.log("hi");
    });

    actionsMenu.appendChild(turnActionsButton);
    turnActionsButton.appendChild(turnActionsImg);
    // #endregion

    // #region Game Title and others
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
    // #endregion
  }
  // Game is P4
  else if (chosenGame.game === "P4") {
    console.log(chosenGame);
    const { gameZone, gameNav } = createGamesStructure();
  }
}

function createGamesStructure() {
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

  return { gameZone, gameNav };
}
