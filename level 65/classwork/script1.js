let counterParagraph = document.getElementById("counter");
let button = document.getElementById("incrementBtn");

let count = 0;

button.addEventListener("click", function() {
  count++;
  counterParagraph.textContent = count;
});