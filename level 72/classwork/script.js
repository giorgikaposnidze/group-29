const box = document.getElementById("movingBox");

let left = 0;
let top = 0;

const interval = setInterval(() => {
  left += 20;
  top += 20;

  box.style.left = left + "px";
  box.style.top = top + "px";

  if (left >= 200 && top >= 200) {
    clearInterval(interval);

    box.style.width = "150px";
    box.style.height = "150px";
    box.style.backgroundColor = "crimson";
  }
}, 1500);