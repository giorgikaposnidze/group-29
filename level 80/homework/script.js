// 1
let word = prompt("Enter sentance: ");
let word2 = "hello"

console.log(word.startsWith(word2))

// 2
let filename = prompt("Enter file name: ");
let prefix = "temp_";

if (filename.startsWith(prefix)) {
  console.log("Temporary file");
} else {
  console.log("Regular file");
}

// 3
let input1 = prompt("Enter text:");
console.log(input1.trim());

// 4
let input2 = prompt("Enter something:");
console.log(input2.trim() === "");

// 5
let a1 = [1, 2], a2 = [3, 4];
console.log(a1.concat(a2));

// 6
let class1 = ["Giorgi", "Nino"], class2 = ["Luka", "Ana"];
console.log(class1.concat(class2));

// 7
let nums = [5, 10, 15];
let check = (prompt("Enter number:"));
console.log(nums.includes(check));

// 8
let colors = ["red", "green", "blue"];
console.log(colors.includes("blue"));

// 9
let arr = [1, 2, 3];
console.log(arr.reverse());

// 10
let users = ["giorgi", "ana", "luka"];
users.reverse().forEach(u => console.log(u));

// 11
let values = [10, 20, 30];
values.forEach(v => console.log(v));

// 12
let prices = [100, 200];
prices.forEach(p => console.log(p * 1.1));