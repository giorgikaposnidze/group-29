// 1
console.log(Boolean(0));    
console.log(Boolean(1));  
console.log(Boolean("hello")); 
console.log(Boolean(""));   
console.log(Boolean(null));    

// 2
let num = Number(prompt("Enter a number:"));
if (num % 2 === 0) {
  alert("Even number");
} else {
  alert("Odd number");
}

// 3
let score = Number(prompt("Enter your score (0–100):"));

if (score >= 90 && score <= 100) {
  alert("Grade: A");
} else if (score >= 80) {
  alert("Grade: B");
} else if (score >= 70) {
  alert("Grade: C");
} else if (score >= 60) {
  alert("Grade: D");
} else {
  alert("Grade: F");
}

// 4
let book = {
  title: "Original Title",
  author: "Your Name",
  genres: ["fiction", "adventure"]
};

console.log(book.genres[0]);      
book.genres.push("mystery");        
book.title = "Updated Title";        
console.log(book);               

// 5
let num1 = Number(prompt("Enter first number:"));
let operator = prompt("Enter operation (+, -, *, /):");
let num2 = Number(prompt("Enter second number:"));
let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num1 / num2;
} else {
  alert("Invalid operator");
}

if (result !== undefined) {
  alert("Result: " + result);
}

// 6
let username = prompt("Enter your name:");
let userAge = Number(prompt("Enter your age:"));

if (username === "Alex" && userAge > 18) {
  alert("Welcome Alex!");
} else {
  alert("Access denied.");
}

// 7
let users = [
  { name: "Nika", age: 21 },
  { name: "Mariam", age: 19 }
];

console.log(users[0].name);         
users[1].age = 20;             
users.push({ name: "Luka", age: 18 }); 
console.log(users);                 

// 8
let input = prompt("Enter something:");
let converted = Number(input);

if (isNaN(converted)) {
  alert("Not a number.");
} else {
  alert("That’s a valid number!");
}
