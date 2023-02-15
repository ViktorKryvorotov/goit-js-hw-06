let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let value = document.querySelector('#value');


const onDecrementBtn = (event) => {
  counterValue -= 1;
  console.log(counterValue);
  value.textContent = counterValue;
};
const onIncrementBtn = (event) => {
  counterValue += 1;
  console.log(counterValue);
  value.textContent = counterValue;
};
decrementBtn.addEventListener("click", onDecrementBtn);
incrementBtn.addEventListener("click", onIncrementBtn);

