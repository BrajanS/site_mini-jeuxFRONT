let existingUsers = [
  {
    username: "Pepito",
    password: "Id0NotThinkSo!",
  },
  {
    username: "Amigo",
    password: "_tHink1ngIsBad",
  },
  {
    username: "admin",
    password: "admin",
  },
];
// localStorage.setItem("users", JSON.stringify(existingUsers));

const users = JSON.parse(localStorage.getItem("users"));
localStorage.setItem("users", JSON.stringify(users));

// Login
const submitLogin = document.querySelector("#loginForm");

submitLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.querySelector("#loginUser").value;
  const password = document.querySelector("#loginPswd").value;
  const matchedUser = users.find(
    (user) => user.username === username && user.password === password
  );

  if (username === "" && password === "") {
    errorMessage("Empty inputs");
  } else if (matchedUser) {
    console.log(matchedUser);
    localStorage.setItem("logged", JSON.stringify(matchedUser));
    window.location.href = "./index.html";
  } else {
    errorMessage("User doesn't exist, verify if you made any mistakes");
  }
});

function errorMessage(message) {
  const searchErrorMessage = document.getElementById("errorMessage");
  if (searchErrorMessage) {
    searchErrorMessage.textContent = message;
  } else {
    const errorMsg = document.createElement("span");
    const loginForm = document.getElementById("loginForm");
    errorMsg.id = "errorMessage";
    errorMsg.textContent = message;
    errorMsg.style.color = "red";
    loginForm.appendChild(errorMsg);
  }
}
