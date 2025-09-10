// 1

let button = document.getElementById('myButton');

function changeBackgroundToBlack() {
  button.style.backgroundColor = 'black';
}

button.addEventListener('click', changeBackgroundToBlack);

// 2

let heading = document.getElementById('myHeading');

function changeFontSize() {
  let size = prompt("Enter a font size in pixels:");
  heading.style.fontSize = size + "px";
}

// 3

let img = document.getElementById('myImage');
console.log(img.src);
