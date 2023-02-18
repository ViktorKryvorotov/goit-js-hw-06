function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChange = document.querySelector('.change-color');
const body = document.querySelector('body');
const hexColor = document.querySelector('.color');
  
btnChange.addEventListener('click', (event) => {
  body.style.backgroundColor = getRandomHexColor();
  hexColor.textContent = body.style.backgroundColor;
})


