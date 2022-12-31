//Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
 //і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
 //В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

 const fontSize = document.querySelector ('#font-size-control');
 const textSizeChange = document.querySelector ('#text')

 fontSize.addEventListener('input', onController);

 
 function onController (event)  {
   return(textSizeChange.style.fontSize = event.currentTarget.value + 'px');
}

console.log (onController);