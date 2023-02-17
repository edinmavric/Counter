let numberCounter = document.getElementById("number-counter");
let buttonAdd = document.querySelector(".btn-add");
let buttonSubstract = document.querySelector(".btn-substract");
let buttonReset = document.querySelector(".btn-reset");
let counter = 0;

const colorChanger = () => {
  if (numberCounter.textContent == 0) {
    numberCounter.style.color = "#273361"; 
  } else if (numberCounter.textContent > 0) {
    numberCounter.style.color = "#75AD3D";
  } else if (numberCounter.textContent < 0) {
    numberCounter.style.color = "#AD1900";
  }
};

buttonAdd.addEventListener("click", () => {
  counter++;
  numberCounter.innerHTML = counter;
  colorChanger();
});

buttonSubstract.addEventListener("click", () => {
  counter--;
  numberCounter.innerHTML = counter;
  colorChanger();
});

buttonReset.addEventListener("click", () => {
  counter = 0;
  numberCounter.innerHTML = counter;
  colorChanger();
});
