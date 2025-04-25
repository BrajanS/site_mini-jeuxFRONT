let users = [
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
    console.log("Empty inputs");
  } else if (matchedUser) {
    console.log("Here:", matchedUser);
    window.location.href = "./index.html";
  } else {
    console.log("User doesn't exist, verify if you made any mistakes");
  }
});
