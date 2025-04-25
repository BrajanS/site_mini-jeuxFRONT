const existingUsers = [
  {
    username: "Pepito",
  },
  {
    username: "Amigo",
  },
  {
    username: "admin",
  },
];

// Register
const registerForm = document.querySelector("#registerForm");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newUsername = document.querySelector("#registerUser");
  const newPswd = document.querySelector("#registerPswd");
  const confirmPswd = document.querySelector("#registerPswdC");
});
