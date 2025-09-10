let box = document.getElementById("box");
let position = 0;

let moveDown = setInterval(() => {
  if (position < 300) {
    position += 2;
    box.style.top = position + "px";
  } else {
    clearInterval(moveDown);
  }
}, 10);
