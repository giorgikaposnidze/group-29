// 1)
let emptyObj = {};
console.log("2) Empty object:", emptyObj);

// 2)
let person = {
  name: "Giorgi",
  age: 25,
  city: "Tbilisi"
};

// 3)
console.log("3) Object with name, age, city:", person);

// 4)
let myName = person.name;
console.log("4) Accessed property 'name':", myName);

// 5)
person.job = "Developer";
console.log("5) Added property 'job':", person);

// 6)
let user = {
  username: "giorgi123",
  profile: {
    email: "giorgi@example.com",
    joined: 2024
  }
};
console.log("6) Nested object:", user);

// 7)
person.age = 26;
console.log("7) Changed property 'age':", person);
let a = 15;
let b = 20;
let bothGreaterThan10 = a > 10 && b > 10;
console.log("8) a > 10 && b > 10:", bothGreaterThan10)

// 8)
let x = 5;
let y = 20;
let oneIsGreaterThan10 = x > 10 || y > 10;
console.log("9) x > 10 || y > 10:", oneIsGreaterThan10);

// 9)
let isOnline = false;
let isOffline = !isOnline;
console.log("10) !isOnline:", isOffline);

// 10)
let result = (a > 10 && b > 10) || (x < 10 && y > 15);
console.log("11) Combined logic:", result);

