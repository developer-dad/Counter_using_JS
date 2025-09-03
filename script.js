const display = document.getElementById("display");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

let count = Number(display.innerText);

increaseBtn.addEventListener("click", function(){
count++;
display.innerText = count;
})

decreaseBtn.addEventListener("click", function(){
count--;
display.innerText = count;
})

resetBtn.addEventListener("click", function(){
count = 0;
display.innerText = count;
})