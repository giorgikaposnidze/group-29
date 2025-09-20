const box = document.getElementById("box");
let x = 0, y = 0;
let step = 5;
let direction = "right";

function moveBox() {
  const maxX = window.innerWidth - box.offsetWidth;
  const maxY = window.innerHeight - box.offsetHeight;

  if (direction === "right") {
    x += step;
    if (x >= maxX) direction = "down";
  } else if (direction === "down") {
    y += step;
    if (y >= maxY) direction = "left";
  } else if (direction === "left") {
    x -= step;
    if (x <= 0) direction = "up";
  } else if (direction === "up") {
    y -= step;
    if (y <= 0) direction = "right";
  }

  box.style.left = x + "px";
  box.style.top = y + "px";
}

setInterval(moveBox, 10);