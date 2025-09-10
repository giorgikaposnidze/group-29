function replaceParagraph() {

  let button = document.createElement("button");
  button.textContent = "Click me";

 let para = document.getElementById("myPara");

 let parent = para.parentNode;

  parent.replaceChild(button, para);
}

window.onload = replaceParagraph;