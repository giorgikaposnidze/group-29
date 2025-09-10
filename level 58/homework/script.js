// 1) 
let num = 123;
let numAsString = String(num);
console.log("1) Number to string:", numAsString, typeof numAsString);

// 2) 
let bool = true;
let boolAsString = String(bool);
console.log("2) Boolean to string:", boolAsString, typeof boolAsString);

// 3) 
let strNum = "456";
let convertedNumber = Number(strNum);
console.log("3) String to number:", convertedNumber, typeof convertedNumber);

// 4) 
let boolValue = false;
let boolToNum = Number(boolValue);
console.log("4) Boolean to number:", boolToNum);

// 5)
let notANumber = "hello";
let result = Number(notANumber);
console.log("5) Non-numeric string to number:", result);

// 6) 
let userNumber = prompt("6) Enter a number:");
userNumber = Number(userNumber);

if (userNumber > 0) {
  console.log("The number is positive.");
} else if (userNumber < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// 7) 
let age = prompt("7) Enter your age:");
age = Number(age);

if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You are not eligible to vote.");
}

// 8)
let firstNum = Number(prompt("8) Enter first number:"));
let secondNum = Number(prompt("Enter second number:"));

if (firstNum > secondNum) {
  console.log("First number is larger.");
} else if (secondNum > firstNum) {
  console.log("Second number is larger.");
} else {
  console.log("Both numbers are equal.");
}
