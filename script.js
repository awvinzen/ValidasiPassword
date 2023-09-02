const submitButton = document.getElementById("submit-button");
const inputPassword = document.getElementById("input-password");
const errorMessage = document.getElementById("error-message");

submitButton.addEventListener("click", () => {
    const password = inputPassword.value
    if (password.length >= 7){
        errorMessage.textContent = password;
        errorMessage.style.color = "green";
    }else {
        errorMessage.textContent = "Password terlalu pendek";
        errorMessage.style.color = "red";
    }
});