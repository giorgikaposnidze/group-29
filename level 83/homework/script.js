// 1
const fruits = [];
fruits.push("apple");
fruits.push("banana");
console.log(fruits);

// 2
const numbers = [10, 20];
numbers.push(30);
console.log(numbers);

// 3
const colors = ["red", "green", "blue"];
const removedColor = colors.pop();
console.log(removedColor);
console.log(colors);

// 4
const animals = ["dog", "cat", "lion", "tiger"];
animals.pop();
animals.pop();
console.log(animals);

// 5
const cities = ["Paris", "London", "Tokyo"];
const removedCity = cities.shift();
console.log(removedCity);
console.log(cities);

// 6
const nums = [5, 10, 15, 20];
const firstRemoved = nums.shift();
const secondRemoved = nums.shift();
console.log(firstRemoved, secondRemoved);
console.log(nums);

// 7
const moreAnimals = ["dog", "cat", "lion", "tiger", "elephant"];
const firstTwo = moreAnimals.slice(0, 2);
console.log(firstTwo);

// 8
const sixNums = [1, 2, 3, 4, 5, 6];
const middleTwo = sixNums.slice(2, 4);
console.log(middleTwo);

// 9
const fiveFruits = ["apple", "banana", "cherry", "date", "fig"];
const removedFruit = fiveFruits.splice(2, 1);
console.log(removedFruit);
console.log(fiveFruits);

// 10
const fourColors = ["red", "blue", "green", "yellow"];
fourColors.splice(1, 0, "purple");
console.log(fourColors);

// 11
const words = ["Hello", "world", "JavaScript"];
const sentence = words.join(" ");
console.log(sentence);

// 12
const dashNums = [1, 2, 3, 4];
const dashedString = dashNums.join("-");
console.log(dashedString);

// 13
const randomNums = [42, 7, 19, 3, 25];
randomNums.sort((a, b) => a - b);
console.log(randomNums);

// 14
const wordList = ["banana", "apple", "cherry", "date"];
wordList.sort();
console.log(wordList);