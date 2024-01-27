const ourTextOutput = document.querySelector("#name-output");
const ourTextInput = document.querySelector("#name-input");

function handleInput(event) {
    console.log(event.target.value);
    if (event.target.value.trim() === "") {
        ourTextOutput.textContent = "Anonymous";
    } else {
        ourTextOutput.textContent = event.target.value;
    }
}

ourTextInput.addEventListener("input", handleInput);

