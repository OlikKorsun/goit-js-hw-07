const ourForm = document.querySelector(".login-form");

function fillForm(event) {
    event.preventDefault();
    const userEmail = event.target.elements.email.value.trim();
    const userPassword = event.target.elements.password.value.trim();
    if (userEmail === "" ||
        userPassword === "") {
        return alert("All form fields must be filled in");
    } else {
        const userData = {
        email: userEmail,
        password: userPassword
        }
        console.table(userData);
        ourForm.reset();
    }
}

ourForm.addEventListener("submit", fillForm);
