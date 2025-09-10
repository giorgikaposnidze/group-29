let heading = document.getElementById("myHeading");

let counter = 0;

heading.onmouseout = function() {
  counter++;
  console.log(counter);
};