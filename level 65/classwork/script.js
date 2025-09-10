    // 1)

let box = document.getElementById("myBox");

let position = 0;

let move = setInterval(function() {
  if (position >= 600) {
    clearInterval(move);
  } else {
    position += 5;
    box.style.left = position + "px";
  }
}, 10);


    // 2)

let counterParagraph = document.getElementById("counter");
let button = document.getElementById("incrementBtn");

let count = 0;

button.addEventListener("click", function() {
  count++;
  counterParagraph.textContent = count;
});
