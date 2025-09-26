// 1
let myString = "";
let name = "Giorgi";

do {
  myString += name;
} while (myString.length < 20);

console.log(myString);


// 2

let numbers = [];
let i = 0;

do {
  numbers.push(Math.floor(Math.random() * 100));
  i++;
} while (i < 5);

for (let num of numbers) {
  console.log(num);
}

// 3

const student = {
  name: "Giorgi",
  age: 17,
  grade: "A"
};

for (let key in student) {
  if (typeof student[key] === "string") {
    if (student[key].length < 4) {
      student[key] = student[key] + student[key];
    } else {
      console.log(student[key]);
    }
  } else {
    student[key] = student[key] ** 2;
  }
}

console.log(student);

// 4
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 7 === 0) {
    continue;
  }
  console.log(i);
}