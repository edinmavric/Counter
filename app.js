let numberCounter = document.getElementById("number-counter");
let buttonAdd = document.querySelector(".btn-add");
let buttonSubstract = document.querySelector(".btn-substract");
let buttonReset = document.querySelector(".btn-reset");
let counter = 0;

buttonAdd.addEventListener("click", () => {
  counter++;
  numberCounter.innerHTML = counter;
});

buttonSubstract.addEventListener("click", () => {
  counter--;
  numberCounter.innerHTML = counter;
});

buttonReset.addEventListener("click", () => {
  counter = 0;
  numberCounter.innerHTML = counter;
});
