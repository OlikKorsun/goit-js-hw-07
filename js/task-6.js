function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ourInput = document.querySelector("#controls").querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const divWithBoxes = document.querySelector("#boxes");

function createBoxes() {
  const amount = parseInt(ourInput.value);
  if ((amount >= 1) && (amount <= 100)) {
    if (divWithBoxes.hasChildNodes) {
    destroyBoxes()
  }
  for (let i = 0; i < amount; i++) {
    const ourDiv = document.createElement("div");
    ourDiv.style.width = `${30 + (i * 10)}px`;
    ourDiv.style.height = `${30 + (i * 10)}px`;
    ourDiv.style.backgroundColor = getRandomHexColor();
    divWithBoxes.appendChild(ourDiv);
  }
  }
    ourInput.value = "";
}

function destroyBoxes() {
  // if (divWithBoxes.hasChildNodes) {
  //   divWithBoxes.removeChild(divWithBoxes.firstChild);
  // } 
  // прикольно получилось видаляє поелементно - можна як зверху так і знизу
  while (divWithBoxes.firstChild) {
      divWithBoxes.removeChild(divWithBoxes.lastChild);
  }
}

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);