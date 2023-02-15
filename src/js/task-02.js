const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const itemEl=document.querySelector('#ingredients');
const newArray=[];

ingredients.forEach((ingredient)=>{
  const addNewItemEl=document.createElement("li");
  addNewItemEl.textContent=ingredient;
  addNewItemEl.classList.add('item');
  newArray.push(addNewItemEl);
})
itemEl.append(...newArray);


// const addNewItemEl=(ingredients)=> 
//   ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`)
//     .join("");

// document.querySelector("#ingredients").innerHTML =
//   addNewItemEl(ingredients);
// console.log(addNewItemEl)