// cloneNode

let div1 = document.getElementById("box");
let copy1 = div1.cloneNode(true);
document.body.appendChild(copy1);

let copy2 = div1.cloneNode(false);
document.body.appendChild(copy2);

let section = document.getElementById("targetSection");
let copy3 = div1.cloneNode(true);
section.appendChild(copy3);

// createElement

let p = document.createElement("p");
p.textContent = "Hello, World!";
document.body.appendChild(p);

let btn = document.createElement("button");
btn.textContent = "Click me!";
document.body.appendChild(btn);

let img = document.createElement("img");
img.src = "image.jpg";
document.body.appendChild(img);

// appendChild

let div2 = document.getElementById("container");
let p2 = document.createElement("p");
p2.textContent = "I am inside!";
div2.appendChild(p2);

let b = document.createElement("button");
b.textContent = "Press";
document.body.appendChild(b);

let img2 = document.createElement("img");
img2.src = "cat.jpg";
document.getElementById("photoBox").appendChild(img2);

// replaceChild

let parent = document.getElementById("textBox");
let oldP = document.getElementById("oldPara");
let newP = document.createElement("p");
newP.textContent = "New paragraph";
parent.replaceChild(newP, oldP);

let imgBox = document.getElementById("imgWrapper");
let oldImg = document.getElementById("oldImage");
let newImg = document.createElement("img");
newImg.src = "new.jpg";
imgBox.replaceChild(newImg, oldImg);

let btnBox = document.getElementById("btnHolder");
let oldBtn = document.getElementById("deleteBtn");
let span = document.createElement("span");
span.textContent = "Deleted!";
btnBox.replaceChild(span, oldBtn);
