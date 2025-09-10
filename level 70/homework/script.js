// 1)

let count = 1;
let counter = setInterval(() => {
  console.log(count);
  count++;
  if (count > 5) {
    clearInterval(counter);
  }
}, 1000);

// 2)

let msg = setInterval(() => {
  console.log("Message every 2 seconds");
}, 2000);

setTimeout(() => {
  clearInterval(msg);
}, 10000);

// 3)

let colors = ["red", "green", "blue", "yellow", "purple"];
let i = 0;

let bgChange = setInterval(() => {
  document.body.style.backgroundColor = colors[i];
  i++;
  if (i === 5) {
    clearInterval(bgChange);
  }
}, 3000);

// 4)

let timeInterval = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

setTimeout(() => {
  clearInterval(timeInterval);
}, 15000);

// 5)

let numbers = [10, 20, 30, 40];
console.log(numbers[1]);

// 6)

let arr = [5, 15, 25, 35];
arr[0] = 100;
console.log(arr);

// 7)

let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 8)

let nums = [2, 4, 6, 8, 10];
let sum = nums[0] + nums[nums.length - 1];
console.log(sum);