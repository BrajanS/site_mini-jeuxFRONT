const profileBtn = document.querySelector("#profileBtn");
const goProfil = document.querySelector("#profileBtn > a");

profileBtn.addEventListener("click", () => {
  const pfpMenu = document.getElementById("profileMenu");
  pfpMenu.classList.toggle("menu");
});
