const users = JSON.parse(localStorage.getItem("users"));
const logggedAs = JSON.parse(localStorage.getItem("logged"));

const username = document.querySelector("#info > div > span");
username.textContent = logggedAs.username;

// #region Find the index inside users[] --> users[index], to add Experience and Stats if they do NOT exist yet
const foundUser = users.findIndex(
  (user) => user.username === logggedAs.username
);
console.log(foundUser);
const user = users[foundUser];
if (!user.experience) {
  user.experience = 0;
  localStorage.setItem("users", JSON.stringify(users));
}
if (!user.statistics) {
  user.statistics = {
    wins: 0,
    loses: 0,
    games_played: 0,
    total_games_ppc: 0,
    total_games_p4: 0,
    time_spent: 0,
  };
  localStorage.setItem("users", JSON.stringify(users));
}
// #endregion ---------------------------------------------------------------------------------------------------------

// #region Experience system ----------------------------------------------------------------
const playerLvl = document.querySelector("#currentLvl");
const playerExperience = document.querySelector("#currentExp");
const playerNextLvlExperience = document.querySelector("#nextLvl");
const lvlBar = document.querySelector("#lvl");

/*let currentExp = user.experience;    Dynamic one */ // experience the player currently has
let currentExp = 304;
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

// #endregion ---------------------------------------------------------------------------------
