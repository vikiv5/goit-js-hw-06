const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

ingredientsList.append(...ingredients.map((item)=>{
  let itemList= document.createElement('li');
  itemList.textContent=item;
  return itemList
}));

//for (let item of ingredients) {
 // let itemList=document.createElement('li');
//  itemList.textContent=item;
 // ingredientsList.append(itemList);
//}

console.log ('itemList')



//Напиши скрипт, який для кожного елемента масиву ingredients:

//Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//Додасть назву інгредієнта як його текстовий вміст.
//Додасть елементу клас item.
//Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

//В другому завданні потрібно створити колекцію елементів, та потім вставити її в розмітку за одну операцію. 
//Ви зараз на кожній ітерації вставляєте по елементу, це дає навантаження на браузер. 
