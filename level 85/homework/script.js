// 1
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log("Random number (1-10):", randomNum);

// 2
let diceRoll = Math.floor(Math.random() * 6) + 1;
console.log("Dice roll:", diceRoll);

// 3
let passwordLength = Math.floor(Math.random() * (16 - 8 + 1)) + 8;
console.log("Password length:", passwordLength);

// 4
let names = ["Giorgi", "Anna", "Mike", "Luka", "Nino"];
let randomIndex = Math.floor(Math.random() * names.length);
console.log("Selected name:", names[randomIndex]);

// 5
let now = new Date();
console.log("Current date and time:", now.toString());

// 6
console.log("Current year:", now.getFullYear());

// 7
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Day of the week:", days[now.getDay()]);