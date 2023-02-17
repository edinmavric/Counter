let numberCounter = document.getElementById("number-counter");
let buttonAdd = document.querySelector(".btn-add");
let buttonSubstract = document.querySelector(".btn-substract");
let buttonReset = document.querySelector(".btn-reset");
let counter = 0;

buttonAdd.addEventListener("click", () => {
  counter++;
  numberCounter.innerHTML = counter;
  if (numberCounter.textContent > 0) {
    numberCounter.style.color = '#75AD3D'
  }
});

buttonSubstract.addEventListener("click", () => {
  counter--;
  numberCounter.innerHTML = counter;
  if (numberCounter.textContent < 0) {
    numberCounter.style.color = '#AD1900'
  }
});

buttonReset.addEventListener("click", () => {
  counter = 0;
  numberCounter.innerHTML = counter;
  if (numberCounter.textContent == 0) {
    numberCounter.style.color = '#273361' 
  }
});
