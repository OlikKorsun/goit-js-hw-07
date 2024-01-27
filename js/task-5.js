function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector(".change-color");

function changeColor() {
  const currentColor = getRandomHexColor();
  const elemDiv = document.querySelector(".widget");
  const spanTextColor = document.querySelector(".color");

  elemDiv.style.backgroundColor = currentColor;
  spanTextColor.textContent = currentColor;  
}

changeColorButton.addEventListener("click", changeColor);