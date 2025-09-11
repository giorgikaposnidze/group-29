// (1-5)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1)
console.log("All elements:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 2)
console.log("\nIndex with elements:");
for (let i = 0; i < numbers.length; i++) {
  console.log("Index " + i + ": " + numbers[i]);
}

// 3)
console.log("\nEven numbers:");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

// 4)
console.log("\nOdd numbers:");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    console.log(numbers[i]);
  }
}

// 5)
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("\nSum of all elements:", sum);
// ----------------------------------------
// (6-10)
// ----------------------------------------
// 6)
const paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
  console.log(paragraphs[i].textContent);
}

// 7)
const headings = document.getElementsByTagName("h1");
for (let i = 0; i < headings.length; i++) {
  headings[i].style.color = "blue";
}

// 8)
const listItems = document.getElementsByTagName("li");
for (let i = 0; i < listItems.length; i++) {
  console.log(listItems[i].innerText);
}

// 9)
const links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
  console.log(links[i].href);
}

// 10)
const images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
  images[i].alt = "Image";
}
// ----------------------------------------
// (11-)
// ----------------------------------------
// 11)
const items = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
  console.log(items[i].textContent);
}

// 12)
const highlights = document.getElementsByClassName("highlight");
for (let i = 0; i < highlights.length; i++) {
  highlights[i].style.backgroundColor = "yellow";
}

// 13)
const titles = document.getElementsByClassName("title");
for (let i = 0; i < titles.length; i++) {
  titles[i].style.fontWeight = "bold";
}

// 14)
const hiddenElements = document.getElementsByClassName("hidden");
for (let i = 0; i < hiddenElements.length; i++) {
  hiddenElements[i].style.display = "none";
}

// 15)
const cards = document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++) {
  cards[i].style.border = "2px solid black";
}
