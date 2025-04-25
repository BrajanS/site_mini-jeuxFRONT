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

// Register
const registerForm = document.querySelector("#registerForm");
console.log(existingUsers);

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newUsername = document.querySelector("#registerUser").value;
  const newPswd = document.querySelector("#registerPswd").value;
  const confirmPswd = document.querySelector("#registerPswdC").value;
  const inputsVerify = [newUsername, newPswd, confirmPswd];
  console.log(inputsVerify);

  if (existingUsers.some((user) => user.username === newUsername)) {
    console.log(
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
      newPswd: newPswd,
    };
    existingUsers.push(saveUser);
    console.log(existingUsers);
    setTimeout(() => {
      window.location.href = "index.html";
    }, 5 * 1000);
  } else {
    console.log("The password is different from the Confirm password.");
  }
});
