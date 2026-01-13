// 1
const myArray = [
  "Giorgi",
  "Kaposnidze",
  11,
  "blue",
  true,
  ["Inception", "Interstellar", "The Matrix"]
];

const [name, surname, favNumber, favColor, isGoaStudent, favMovies] = myArray;

console.log(name);
console.log(surname);
console.log(favNumber);
console.log(favColor);
console.log(isGoaStudent);
console.log(favMovies);

// 2
const myObj = {
  name: "Giorgi",
  surname: "Beridze",
  academy: "GOA",
  favColor: "blue",
  favNumber: 7
};

const keysToCheck = ["name", "myName", "mySurname", "worstColor", "favColor", "favnumber", "favNumber"];

keysToCheck.forEach(key => {
  console.log(`${key}: ${Object.hasOwn(myObj, key)}`);
});

// 3
const pairsObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10
};

const keys = Object.keys(pairsObj);
console.log("Keys:", keys);

const values = Object.values(pairsObj);
console.log("Values:", values);