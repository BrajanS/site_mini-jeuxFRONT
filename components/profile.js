const users = JSON.parse(localStorage.getItem("users"));
const logggedAs = JSON.parse(localStorage.getItem("logged"));

// #region Find the index inside users[] --> users[index], to add Experience and Stats if they do NOT exist yet
const foundUser = users.findIndex(
  (user) => user.username === logggedAs.username
);
const user = users[foundUser];

const pfpImage = document.querySelector("#pfp > img");
const username = document.querySelector("#info > div > span");

pfpImage.src = user.profileImg;
username.textContent = user.username;

function defaultData(customUser) {
  const emptyStats = {
    wins: 0,
    loses: 0,
    games_played: 0,
    total_games_ppc: 0,
    total_games_p4: 0,
    time_spent: 0,
  };
  if (!customUser.profileImg) {
    customUser.profileImg = "../ressources/images/profile.png";
    localStorage.setItem("users", JSON.stringify(users));
  }
  if (!customUser.experience) {
    customUser.experience = 0;
    localStorage.setItem("users", JSON.stringify(users));
  }
  if (!customUser.statistics) {
    customUser.statistics = emptyStats;
    localStorage.setItem("users", JSON.stringify(users));
  }
  if (!customUser.friends) {
    // Adds those as default friends
    customUser.friends = [
      {
        username: users[0].username,
        image: users[0].image,
        experience: 0,
        statistics: emptyStats,
      },
      {
        username: users[1].username,
        image: users[0].image,
        experience: 0,
        statistics: emptyStats,
      },
    ];
    localStorage.setItem("users", JSON.stringify(users));
  }
  if (!customUser.image) {
    customUser.image = "../ressources/images/profile.png";
    localStorage.setItem("users", JSON.stringify(users));
  }
}
defaultData(user);
// #endregion ---------------------------------------------------------------------------------------------------------

// #region Experience system ----------------------------------------------------------------
const playerLvl = document.querySelector("#currentLvl");
const playerExperience = document.querySelector("#currentExp");
const playerNextLvlExperience = document.querySelector("#nextLvl");
const lvlBar = document.querySelector("#lvl");

let currentExp = user.experience;
// let currentExp = 258;
let baseExp = 100; // experience goal before Leveling Up
let level = 0;

while (currentExp >= baseExp) {
  currentExp -= baseExp;
  level++;
  baseExp += Math.round((baseExp / 2) * 1.05); // 5% more and round UP
}

playerExperience.textContent = currentExp;
playerNextLvlExperience.textContent = baseExp;
playerLvl.textContent = level;

const widthCalculated = Math.min(100, (currentExp / baseExp) * 100);
lvlBar.style.width = `${widthCalculated}%`;
// #endregion ----------------------------------------------------------------

// #region Statistics
const statistics = document.querySelector("#statistics");
const showSocials = document.querySelector("#titleAndSocials > div > button");

let showingFriends = false;
let savedStats = null;

showSocials.addEventListener("click", () => {
  const title = document.querySelector("h2");

  if (!showingFriends) {
    showingFriends = true;
    title.textContent = "Friends:";

    const content = document.querySelector("#content");
    if (content) {
      savedStats = content.cloneNode(true);
      content.remove();
    }

    const friendsList = document.createElement("div");
    friendsList.id = "friendsList";
    statistics.appendChild(friendsList);

    user.friends.forEach((friend) => {
      // #region Structure Amis de base
      const friendContent = document.createElement("div");
      friendsList.appendChild(friendContent);
      const friendData = document.createElement("div");
      friendData.className = "friendData";
      const friendButtons = document.createElement("div");
      friendButtons.className = "friendButtons";
      friendContent.appendChild(friendData);
      friendContent.appendChild(friendButtons);
      // #endregion
      const friendPfp = document.createElement("div");
      friendData.appendChild(friendPfp);
      const friendPfpImage = document.createElement("img");
      friendPfpImage.src =
        user.profileImg || "../ressources/images/profile.png";
      friendPfp.appendChild(friendPfpImage);
    });
  } else {
    showingFriends = false;
    title.textContent = "Statistics:";

    const findFriendsList = document.querySelector("#friendsList");
    if (findFriendsList) findFriendsList.remove();
    if (savedStats) statistics.appendChild(savedStats);
  }
});

function fillStats() {
  if (content) {
    const wins = document.querySelector("#stat-wins");
    const loses = document.querySelector("#stat-loses");
    const games_played = document.querySelector("#stat-games_played");
    const total_games_ppc = document.querySelector("#stat-total_games_ppc");
    const total_games_p4 = document.querySelector("#stat-total_games_p4");
    const time_spent = document.querySelector("#stat-time_spent");

    wins.textContent = user.statistics.wins;
    loses.textContent = user.statistics.loses;
    games_played.textContent = user.statistics.games_played;
    total_games_ppc.textContent = user.statistics.total_games_ppc;
    total_games_p4.textContent = user.statistics.total_games_p4;
    time_spent.textContent = user.statistics.time_spent;
  }
}

fillStats();
// #endregion ---------------------------------------------------------------------------------
