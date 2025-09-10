// 1)
let paragraph = document.createElement("p");
paragraph.textContent = "This is a new paragraph.";
document.body.appendChild(paragraph);

// 2
let heading = document.createElement("h1");
heading.textContent = "This is a heading";

let div = document.createElement("div");
div.appendChild(heading);
document.body.appendChild(div);

// 3)
let image = document.createElement("img");
image.src = "https://www.google.com/";
document.body.appendChild(image);

// 4)
let button = document.createElement("button");
button.textContent = "Click me";
document.body.appendChild(button);

// 5)
let list = document.createElement("ul");

let item1 = document.createElement("li");
item1.textContent = "First item";
list.appendChild(item1);

let item2 = document.createElement("li");
item2.textContent = "Second item";
list.appendChild(item2);

let item3 = document.createElement("li");
item3.textContent = "Third item";
list.appendChild(item3);

document.body.appendChild(list);
