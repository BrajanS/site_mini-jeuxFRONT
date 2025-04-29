const users = JSON.parse(localStorage.getItem("users")) || [];

// Register
const registerForm = document.querySelector("#registerForm");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newUsername = document.querySelector("#registerUser").value;
  const newPswd = document.querySelector("#registerPswd").value;
  const confirmPswd = document.querySelector("#registerPswdC").value;
  const inputsVerify = [newUsername, newPswd, confirmPswd];

  if (users.some((user) => user.username === newUsername)) {
    errorMessage(
      "This username / user, already exists. Please choose a different one."
    );
  }
  // Verifies if all inputs all NOT empty inside
  else if (
    inputsVerify.every((text) => text !== "") &&
    newPswd === confirmPswd
  ) {
    const saveUser = {
      username: newUsername,
      password: newPswd,
    };
    users.push(saveUser);
    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "login.html";
  } else if (inputsVerify.some((text) => text === "")) {
    errorMessage("Some inputs are Empty, please fill the register first");
  } else {
    errorMessage("The password is different from the Confirm password.");
  }
});

function errorMessage(message) {
  const searchErrorMessage = document.getElementById("errorMessage");
  if (searchErrorMessage) {
    searchErrorMessage.textContent = message;
  } else {
    const errorMsg = document.createElement("span");
    const loginForm = document.getElementById("registerForm");
    errorMsg.id = "errorMessage";
    errorMsg.textContent = message;
    errorMsg.style.color = "red";
    loginForm.appendChild(errorMsg);
  }
}
