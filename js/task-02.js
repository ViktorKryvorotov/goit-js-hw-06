const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulEl = document.querySelector('#ingredients');



const liListEl = ingredients.reduce((acc, ingredient) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  acc.appendChild(liEl);
  return acc;
}, ulEl);
console.log(ulEl)

//--------------------------------------------------------------//

// const liListEl = ingredients.map((ingredient) => {
//   const liEl = document.createElement("li");
//   liEl.textContent = ingredient;
//   liEl.classList.add('item');

//   return liEl;
// });
// ulEl.append(...liListEl);



//--------------------------------------------------------------//


// const itemEl=document.querySelector('#ingredients');
// const newArray=[];

// ingredients.forEach((ingredient)=>{
//   const addNewItemEl=document.createElement("li");
//   addNewItemEl.textContent=ingredient;
//   addNewItemEl.classList.add('item');
//   newArray.push(addNewItemEl);
// })
// itemEl.append(...newArray);

//--------------------------------------------------------------//

// const addNewItemEl=(ingredients)=> 
//   ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`)
//     .join("");

// document.querySelector("#ingredients").innerHTML =
//   addNewItemEl(ingredients);
// console.log(addNewItemEl)