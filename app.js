let numberCounter = document.getElementById("number-counter");
let buttonAdd = document.querySelector(".btn-add");
let buttonSubstract = document.querySelector(".btn-substract");
let buttonMultiply = document.querySelector(".btn-multiply");
let buttonDivide = document.querySelector(".btn-divide");
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

const checkIfNaN = (num) => {
  if (isNaN(num)) {
    alert("Entered value is not a number, try again!");
    return true;
  }
};

const checkDecimal = () => {
  if (Number.isInteger(counter)) {
    numberCounter.innerHTML = counter;
  } else {
    numberCounter.innerHTML = counter.toFixed(2);
  }
};

buttonMultiply.addEventListener("click", () => {
  let num = +prompt("Enter number to multiply current counter number");
  if (checkIfNaN(num)) return;
  counter *= num;
  checkDecimal();
  colorChanger();
});

buttonDivide.addEventListener("click", () => {
  let num = +prompt("Enter number to divide current counter number");
  if (checkIfNaN(num)) return;
  counter /= num;
  checkDecimal();
  colorChanger();
});

buttonAdd.addEventListener("click", () => {
  counter++;
  checkDecimal();
  colorChanger();
});

buttonSubstract.addEventListener("click", () => {
  counter--;
  checkDecimal();
  colorChanger();
});

buttonReset.addEventListener("click", () => {
  counter = 0;
  numberCounter.innerHTML = counter;
  colorChanger();
});
