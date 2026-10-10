const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");
const togglePassword = document.getElementById("togglePassword");

// Show / Hide Password
togglePassword.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "Hide";
    } else {
        password.type = "password";
        togglePassword.textContent = "Show";
    }
});

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
    }

    if (password.value.length < 8) {
        passwordError.textContent =
            "Password must be at least 8 characters.";
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent =
            "Form validation successful!";
    }
});