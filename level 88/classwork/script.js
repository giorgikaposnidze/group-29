// 1
setTimeout(() => {
  console.log("giorgi kaposnidze");
}, 5000);

setInterval(() => {
  console.log("giorgi");
}, 500);



// 2

const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const display = document.getElementById("display");

let count = parseInt(localStorage.getItem("count")) || 0;
display.textContent = `Count: ${count}`;

incrementBtn.onclick = () => {
  count++;
  localStorage.setItem("count", count);
  display.textContent = `Count: ${count}`;
  console.log("Count:", count);
};

resetBtn.onclick = () => {
  localStorage.removeItem("count");
  count = 0;
  display.textContent = `Count: ${count}`;
  console.log("Count reset to 0");
};

// 3
const favoriteMovies = [
  "Inception",
  "Interstellar",
  "The Matrix",
  "Fight Club",
  "Iron man"
];

localStorage.setItem("movies", JSON.stringify(favoriteMovies));

setTimeout(() => {
  const storedMovies = localStorage.getItem("movies");
  const parsedMovies = JSON.parse(storedMovies);
  console.log( parsedMovies);
}, 2000);