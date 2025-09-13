document.getElementById("signupBtn").addEventListener("click", validateForm);

function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");
  let confirmPasswordError = document.getElementById("confirmPasswordError");

  // Reset errors
  nameError.innerText = "";
  emailError.innerText = "";
  passwordError.innerText = "";
  confirmPasswordError.innerText = "";

  let valid = true;

  if (name === "") {
    nameError.innerText = "Name is required";
    valid = false;
  }
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailError.innerText = "Enter a valid email";
    valid = false;
  }
  if (password.length < 6) {
    passwordError.innerText = "Password must be at least 6 characters";
    valid = false;
  }
  if (password !== confirmPassword) {
    confirmPasswordError.innerText = "Passwords do not match";
    valid = false;
  }

  if (valid) {
    alert("Signup successful!");
  }
}
