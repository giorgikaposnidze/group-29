let count = 0;
const countDisplay = document.getElementById("count");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

plusBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

minusBtn.addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});
