// 1
const numbers1 = [3, 7, -2, 5, -8];
const firstNegativeIndex = numbers1.findIndex(num => num < 0);
console.log("1) First negative index:", firstNegativeIndex);

// 2
const users1 = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 18 },
  { name: "Dana", age: 20 }
];
const firstAdultIndex = users1.findIndex(user => user.age >= 18);
console.log("2) First adult user index:", firstAdultIndex);

// 3
const numbers2 = [4, -1, 6, -3, 2];
const lastNegativeIndex = numbers2.findLastIndex(num => num < 0);
console.log("3) Last negative index:", lastNegativeIndex);

// 4
const users2 = [
  { name: "Eve", age: 16 },
  { name: "Frank", age: 19 },
  { name: "Grace", age: 17 },
  { name: "Hank", age: 21 }
];
const lastAdultIndex = users2.findLastIndex(user => user.age >= 18);
console.log("4) Last adult user index:", lastAdultIndex);

// 5
const numbers3 = [1, 3, 5, 8, 9];
const firstEven = numbers3.find(num => num % 2 === 0);
console.log("5) First even number:", firstEven);

// 6
const products1 = [
  { id: 1, price: 50 },
  { id: 2, price: 120 },
  { id: 3, price: 80 }
];
const expensiveProduct1 = products1.find(product => product.price > 100);
console.log("6) First expensive product:", expensiveProduct1);

// 7
const numbers4 = [3, 7, 10, 13, 16];
const lastEven = numbers4.findLast(num => num % 2 === 0);
console.log("7) Last even number:", lastEven);

// 8
const products2 = [
  { id: 4, price: 90 },
  { id: 5, price: 150 },
  { id: 6, price: 110 }
];
const expensiveProduct2 = products2.findLast(product => product.price > 100);
console.log("8) Last expensive product:", expensiveProduct2);

// 9
const colors = ["red", "green", "blue", "yellow"];
const blueIndex = colors.indexOf("blue");
console.log("9) Index of 'blue':", blueIndex);

// 10
const numbers5 = [5, 3, 5, 7, 5];
const firstFiveIndex = numbers5.indexOf(5);
console.log("10) First index of 5:", firstFiveIndex);

// 11
const fruits = ["banana", "apple", "orange", "apple", "grape"];
const lastAppleIndex = fruits.lastIndexOf("apple");
console.log("11) Last index of 'apple':", lastAppleIndex);

// 12
const numbers6 = [10, 20, 10, 30, 10];
const lastTenIndex = numbers6.lastIndexOf(10);
console.log("12) Last index of 10:", lastTenIndex);