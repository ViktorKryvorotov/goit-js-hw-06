function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}




const inputEl = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');




function createBoxes(amount) {
  let size = 30;
    for (let i = 0; i < amount; i += 1) {
      const newBox = document.createElement('div');
      newBox.style.width = size+'px';
      newBox.style.height = size + 'px';
      newBox.style.borderRadius = '10px';
      newBox.style.marginLeft= '2px';
      newBox.style.backgroundColor = getRandomHexColor();
      boxesEl.appendChild(newBox);
      size += 10;
    }
};
boxesEl.style.display = 'flex';
boxesEl.style.alignItems = 'center';


function destroyBoxes() {
  boxesEl.innerHTML = "";
}


createBtn.addEventListener('click', () => {
  createBoxes(Number(inputEl.value));
});


destroyBtn.addEventListener('click',destroyBoxes);

