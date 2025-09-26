// 1
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);

// 2
let j = 10;
do {
    console.log(j);
    j--;
} while (j >= 1);

// 3
let k = 2;
do {
    console.log(k);
    k += 2;
} while (k <= 20);

// 4
let num = 1;
let sum = 0;
do {
    console.log(num);
    sum += num;
    num++;
} while (sum < 100);
console.log("Final sum:", sum);

// 5
let m = 1;
do {
    console.log(`5 x ${m} = ${5 * m}`);
    m++;
} while (m <= 10);

// 6

const person = {
    name: "Giorgi",
    age: 25,
    city: "Tbilisi"
};

console.log("Keys of person object:");
for (let key in person) {
    console.log(key);
}

// 7
const book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988
};

console.log("\nValues of book object:");
for (let key in book) {
    console.log(book[key]);
}

// 8
const student = {
    name: "Nino",
    grade: "A",
    major: "Computer Science"
};

console.log("\nKeys and values of student object:");
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

// 9
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "White",
    fuel: "Petrol"
};

let count = 0;
for (let key in car) {
    count++;
}
console.log(`\nTotal properties in car object: ${count}`);

// 10
const original = {
    x: 10,
    y: 20,
    z: 30
};

const copy = {};
for (let key in original) {
    copy[key] = original[key];
}

console.log("\nCopied object:");
console.log(copy);

// 11
const numbers = [3, 7, 12, 5, 9];
console.log("Elements in numbers array:");
for (let num of numbers) {
    console.log(num);
}

// 12
const message = "Hello, Giorgi!";
console.log("\nCharacters in message:");
for (let char of message) {
    console.log(char);
}

// 13
const fruits = ["Apple", "Banana", "Cherry", "Mango", "Peach"];
console.log("\nFruit names:");
for (let fruit of fruits) {
    console.log(fruit);
}

// 14
// const numbers = [10, 20, 30, 40, 50];
// let sum = 0;

// for (const num of numbers) {
//   sum += num;
// }

// console.log(sum);

// 15
let largest = numbers[0];
for (let num of numbers) {
    if (num > largest) {
        largest = num;
    }
}
console.log(`Largest number: ${largest}`);