const numberItemEl = document.querySelectorAll('li.item');
console.log('Number of categories:',numberItemEl.length);

numberItemEl.forEach((element) => {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.children.length);
}
);

