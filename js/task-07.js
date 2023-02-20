const fontSizeControl = document.querySelector('#font-size-control');
const textSpanEl = document.querySelector('#text');

fontSizeControl.addEventListener("input", (event) => {
    const fontSize = event.currentTarget.value + 'px';
    textSpanEl.style.fontSize = fontSize;
});


