let counter = document.querySelector("#counter");
let btnIncrease = document.querySelector("#btnIncrease");
let btnDecrease = document.querySelector("#btnDecrease");
let btnReset = document.querySelector("#btnReset");

btnIncrease.addEventListener("click",()=>{
    let counterContent = parseInt(counter.textContent);
    counter.textContent = ++counterContent;
});
btnDecrease.addEventListener("click",()=>{
    let counterContent = parseInt(counter.textContent);
    counter.textContent = --counterContent;
});
btnReset.addEventListener("click",()=>{
    let counterContent = parseInt(counter.textContent);
    counter.textContent = 0;
});