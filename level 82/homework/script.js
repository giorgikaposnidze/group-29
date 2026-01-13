// 1
const numbers = [-3, -1, 0, 5, -7];
console.log("Has positive:", numbers.some(num => num > 0));

// 2
const words = ["cat", "elephant", "dog", "lion"];
console.log("Has short word:", words.some(word => word.length < 4));

// 3
const tasks = [
  { title: "Do homework", completed: false },
  { title: "Wash dishes", completed: true },
  { title: "Read book", completed: false }
];
console.log("Any task completed:", tasks.some(task => task.completed));

// 4
const nums = [1, 2, 3, 4];
console.log("All positive:", nums.every(num => num > 0));

// 5
const wordsUpper = ["HELLO", "WORLD", "JAVASCRIPT"];
console.log("All uppercase:", wordsUpper.every(word => word === word.toUpperCase()));

// 6
const users = [
  { age: 20 },
  { age: 25 },
  { age: 18 }
];
console.log("All users >= 18:", users.every(user => user.age >= 18));

// 7
const numsToDouble = [1, 2, 3, 4];
const doubled = numsToDouble.map(num => num * 2);
console.log("Doubled:", doubled);

// 8
const wordsList = ["apple", "banana", "cherry"];
const firstLetters = wordsList.map(word => word[0]);
console.log("First letters:", firstLetters);

// 9
const userObjects = [
  { username: "giorgi" },
  { username: "anna" },
  { username: "mike" }
];
const usernames = userObjects.map(user => user.username);
console.log("Usernames:", usernames);

// 10
const numsFilter = [1, 2, 3, 4, 5, 6];
const evens = numsFilter.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);

// 11
const wordsFilter = ["cat", "elephant", "dog", "lion", "giraffe"];
const longWords = wordsFilter.filter(word => word.length > 5);
console.log("Words > 5 letters:", longWords);

// 12
const products = [
  { name: "Laptop", inStock: true },
  { name: "Phone", inStock: false },
  { name: "Tablet", inStock: true }
];
const availableProducts = products.filter(product => product.inStock);
console.log("Products in stock:", availableProducts);