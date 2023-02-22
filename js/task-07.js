
const fontSizeControl = document.querySelector('#font-size-control');
const textSpanEl = document.querySelector('#text');
textSpanEl.style.fontSize = fontSizeControl.value + 'px';

fontSizeControl.addEventListener("input", (event) => {
    textSpanEl.style.fontSize = event.currentTarget.value + 'px';
});

