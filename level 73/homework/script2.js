// 14
const numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (const num of numbers) {
  sum += num;
}

console.log(sum);

// 15
let largest = numbers[0];
for (let num of numbers) {
    if (num > largest) {
        largest = num;
    }
}
console.log(`Largest number: ${largest}`);

// 16
console.log("16) For loop stopping at 5:");
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}

console.log("\n");