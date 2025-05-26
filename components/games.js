const users = JSON.parse(localStorage.getItem("users"));
const logggedAs = JSON.parse(localStorage.getItem("logged"));

// #region Find the index inside users[] --> users[index], to add Experience and Stats if they do NOT exist yet
const foundUser = users.findIndex(
  (user) => user.username === logggedAs.username
);
const user = users[foundUser];

console.log(user);

const gamesList = [
  {
    game: "PPC",
    game_id: 0,
    game_backgrounds: {
      menu: "../ressources/images/ppc-forest-bg.jpg",
    },
    game_images: {},
    game_sprites: {},
  },
  {
    game: "P4",
    game_id: 1,
    game_backgrounds: {
      menu: "",
    },
    game_images: {},
    game_sprites: {},
  },
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
    // #region PPC contents
    const screen = document.createElement("div");
    const actionsMenu = document.createElement("div");
    const turnActionsButton = document.createElement("button");
    const turnActionsImg = document.createElement("img");

    let screenWidth = 820;
    screen.id = "screenPpc";
    screen.style.width = `${screenWidth}px`;
    screen.style.backgroundImage = `url(${gamesList[0].game_backgrounds.menu})`;
    screen.style.backgroundPosition = "center";
    screen.style.backgroundSize = "cover";

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
    ppcModePlayer.textContent = "Versus PLAYER";
    ppcModeNpc.textContent = "Versus NPC";
    ppcModesContainer.append(ppcModePlayer, ppcModeNpc);

    ppcModeNpc.addEventListener("click", () => {
      loadPpcNPC();
    });

    actionsMenu.appendChild(turnActionsButton);
    turnActionsButton.appendChild(turnActionsImg);
    // #endregion

    // #region PPC Title and others
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

function loadPpcNPC() {
  // #region Closes the Menu
  const screenPpc = document.getElementById("screenPpc");
  const ppcMenu = document.getElementById("ppcMenu");
  screenPpc.style.backgroundImage = `none`;
  ppcMenu.classList.add("hiddenOn");
  // #endregion
  const difficultyMenu = document.createElement("div");
  const difficultyMenuTitle = document.createElement("span");
  const difficultyOptions = document.createElement("div");
  const diffNormal = document.createElement("button");
  const diffHard = document.createElement("button");
  const diffCustom = document.createElement("button");
  const npcModeSettings = {
    normal: {
      life: 3,
      isHpBar: false,
      damage: 1,
      rounds: 3,
    },
    hard: {
      life: 2,
      isHpBar: false,
      damage: 1,
      rounds: 3,
    },
    custom: {
      life: 3,
      isHpBar: false,
      damage: 1,
      rounds: 3,
    },
  };
  difficultyMenu.id = "ppcDifficultyMenu";
  difficultyMenuTitle.textContent = "Choose Difficulty";
  difficultyOptions.id = "ppcDifficultyOptions";
  diffNormal.textContent = "Normal";
  diffHard.textContent = "Hard";
  diffCustom.textContent = "Custom";
  screenPpc.appendChild(difficultyMenu);
  difficultyMenu.appendChild(difficultyMenuTitle);
  difficultyMenu.appendChild(difficultyOptions);
  difficultyOptions.append(diffNormal, diffHard, diffCustom);
  diffNormal.addEventListener("click", () => {
    launchPpcVsNpc(npcModeSettings.normal, difficultyMenu, screenPpc);
  });
}

function backToMenuPpc() {}

function launchPpcVsNpc(settings, menuToClose, parent) {
  menuToClose.classList.add("hiddenOn");
  parent.style.backgroundImage = `url("../ressources/images/ppc-bamboo-bg.jpg")`;
  const ppcGame = document.createElement("div");
  const topBar = document.createElement("div");
  const battleView = document.createElement("div");
  const userSide = document.createElement("div");
  const npcSide = document.createElement("div");
  const userInfo = document.createElement("div");
  const npcInfo = document.createElement("div");

  const userAvatar = document.createElement("img");
  const npcAvatar = document.createElement("img");
  const userHearts = document.createElement("div");
  const npcHearts = document.createElement("div");

  const playerName = document.createElement("span");
  const plrName = JSON.parse(localStorage.getItem("logged"));
  const npcName = document.createElement("span");
  // prettier-ignore
  const randomName = [
    { name: "Rocco Sharp"      },
    { name: "Cassie Stone"     },
    { name: "Nico Scissorhand" },
    { name: "Jade Flint"       },
    { name: "Victor Palmson"   },
    { name: "Selena Slate"     },
    { name: "Gabe Cutter"      },
    { name: "Mira Foldwell"    },
    { name: "Mira Foldwell"    },
    { name: "Tara Crisp"       },
  ];
  const randomNumber = Math.floor(Math.random() * randomName.length - 1);

  ppcGame.id = "ppcGame";
  playerName.textContent = plrName.username;
  npcName.textContent = randomName[randomNumber].name;
  userSide.id = "userSide";
  npcSide.id = "npcSide";
  userInfo.id = "userInfo";
  npcInfo.id = "npcInfo";
  userAvatar.src = user.profileImg;
  npcAvatar.src = "../ressources/images/lost.png";

  parent.appendChild(ppcGame);
  ppcGame.append(topBar, battleView);
  topBar.append(userSide, npcSide);
  userSide.appendChild(userInfo);
  npcSide.appendChild(npcInfo);
  userInfo.appendChild(userHearts);
  npcInfo.appendChild(npcHearts);
  const sides = [userHearts, npcHearts];

  if (settings.isHpBar === false) {
    // Adds Hearts to each sides
    sides.forEach((side) => {
      for (let i = 0; i < settings.life; i++) {
        const hearts = document.createElement("img");
        hearts.classList.add("hearts");
        hearts.src = "../ressources/images/heart.png";
        side.appendChild(hearts);
      }
    });
  } else if (settings.isHpBar === true) {
  }
  userInfo.appendChild(playerName);
  npcInfo.appendChild(npcName);
  userSide.appendChild(userAvatar);
  npcSide.appendChild(npcAvatar);
}
