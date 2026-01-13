// 1
const prices = {
  apple: 1,
  banana: 2,
  orange: 3
};

const result = Object.entries(prices).map(
  ([item, price]) => `${item}: $${price}`
);

console.log(result);

// 2
const person = {
  name: "Alice",
  age: 25,
  city: "Paris"
};

const propertiesToCheck = ["name", "age", "country", "city"];

const count = propertiesToCheck.reduce((acc, prop) => {
  return acc + (Object.hasOwn(person, prop) ? 1 : 0);
}, 0);

console.log(count); 

// 3
const car = {
  brand: "BMW",
  model: "M5",
  year: 2024
};

const keys = Object.keys(car);

console.log(keys);
console.log(keys.length);
console.log(keys.includes("model"));

// 4
const scores = {
  math: 90,
  english: 85,
  science: 95
};

const values = Object.values(scores);

const total = values.reduce((sum, val) => sum + val, 0);
const max = Math.max(...values);

console.log(total);
console.log(max);