const ourTextOutput = document.querySelector("#name-output");
const ourTextInput = document.querySelector("#name-input");

function handleInput(event) {
    const userName = event.target.value.trim();
    if (userName === "") {
        ourTextOutput.textContent = "Anonymous";
    } else {
        ourTextOutput.textContent = userName;
    }
}

ourTextInput.addEventListener("input", handleInput);

