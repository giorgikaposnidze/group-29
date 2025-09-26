// 17
console.log("17) While loop breaking when sum > 50:");
let i = 1;
let sum = 0;
while (true) {
  sum += i;
  if (sum > 50) break;
  console.log(i);
  i++;
}

console.log("\n");

// 18
console.log("18) First negative number in array:");
const numbers = [4, 7, 0, 3, -6, 8, -2];
for (const num of numbers) {
  if (num < 0) {
    console.log("Found:", num);
    break;
  }
}

console.log("\n");

// 19
console.log("19) Print names until 'John':");
const names = ["Anna", "Luka", "Nino", "John", "Giorgi"];
for (const name of names) {
  if (name === "John") break;
  console.log(name);
}

console.log("\n");

// 20
console.log("20) First number divisible by 7 and 11:");
for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0 && i % 11 === 0) {
    console.log("Found:", i);
    break;
  }
}

// 21
console.log("21) Skip number 5:");
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
}

console.log("\n");

// 22
console.log("22) Even numbers only:");
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}

console.log("\n");