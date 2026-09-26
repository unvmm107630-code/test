const buttton = document.getElementById("button");
const passwordInput = document.getElementById("password");
const loginInput = document.getElementById("login");
const loginLabel = document.getElementById("login-label");
const passwordLabel = document.getElementById("password-label");

buttton.addEventListener("click", function() {
    loginInput.classList.add("error");
    passwordInput.classList.add("error");
    loginLabel.classList.add("error");
    passwordLabel.classList.add("error");
    setTimeout(function() {
        loginInput.classList.remove("error");
        passwordInput.classList.remove("error");
        loginLabel.classList.remove("error");
        passwordLabel.classList.remove("error");
    }, 500);
})

