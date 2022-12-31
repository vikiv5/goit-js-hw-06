const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
     }
}


const counterValue = 0 ;


const decrementBtn = document.querySelector('[data-action="decrement"]')
console.log (decrementBtn)
const incrementBtn = document.querySelector('[data-action="increment"]')
console.log (incrementBtn)
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', function(){

    counter.decrement();
    console.log(counter);
    valueEl.textContent = counter.value;
})

incrementBtn.addEventListener('click', function(){
    counter.increment();
    console.log(counter);
    valueEl.textContent = counter.value;
})



