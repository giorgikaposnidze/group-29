// 23
console.log("23) Positive numbers only:");
const numbers = [-3, 7, 0, -1, 5, -9, 12];
for (const num of numbers) {
  if (num <= 0) continue;
  console.log(num);
}

console.log("\n");

// 24
console.log("24) Characters without spaces:");
const text = "Hello Giorgi!";
for (const char of text) {
  if (char === " ") continue;
  console.log(char);
}

console.log("\n");

// 25
console.log("25) Skip multiples of 3:");
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}