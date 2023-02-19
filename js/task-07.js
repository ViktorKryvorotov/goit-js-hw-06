const rangeInputEl = document.querySelector('#font-size-control');
const textSpanEl = document.querySelector('#text');

rangeInputEl.addEventListener("input", (event) => {
    textSpanEl.style.fontSize = event.currentTarget.value+"px";
    console.log(event.currentTarget.value);
});
