// 1 Type Conversion Practice

// 1) 
console.log("1) Number to string:", String(123));

// 2)
console.log("2) Boolean to string:", String(true)); 

// 3) 
console.log("3) String to number:", Number("456"));

// 4) 
console.log("4) Boolean false to number:", Number(false)); 

// 5)
console.log("5) Non-numeric string to number:", Number("hello"));


// 2

let number = Number(prompt("Homework 2:\nEnter a number:"));

if (number > 0) {
  alert("The number is positive.");  
} else if (number < 0) {
  alert("The number is negative."); 
} else {
  alert("The number is zero."); 
}


// 3

let age = Number(prompt("Homework 3:\nEnter your age:"));

if (age >= 18) {
  alert("You can vote!"); 
} else {
  alert("You are not eligible to vote.");  
}


// 4

let num1 = Number(prompt("Homework 4:\nEnter the first number:"));
let num2 = Number(prompt("Enter the second number:"));

if (num1 > num2) {
  alert("First number is larger");
} else if (num2 > num1) {
  alert("Second number is larger"); 
} else {
  alert("Both numbers are equal");
}


//  1  Object Basics

let person = {};  

person.name = "Giorgi";  
person.age = 25;         
person.city = "Tbilisi"; 

console.log("Person name:", person.name); 

person.hobby = "Coding";   
person.city = "Batumi";    

console.log("Updated person object:", person); 


// 2

let student = {       
  name: "Anna",
  info: {
    age: 17,
    school: "Green High School",
    grade: "11th"
  }
};

console.log("Student school:", student.info.school); 

student.info.grade = "12th";   
student.info.club = "Drama";     

console.log("Updated student:", student);


// 3

let a = Number(prompt("Homework 3 (Logic):\nEnter first number:"));
let b = Number(prompt("Enter second number:"));

if (a > 10 && b > 10) {
  alert("Both numbers are greater than 10.");
} else {
  alert("At least one number is 10 or less."); 
}


// 4

let age2 = Number(prompt("Homework 4 (Logic):\nEnter your age:"));
let city = prompt("Enter your city:").toLowerCase();

if ((age2 > 18 || city === "tbilisi") && !(age2 < 18)) {
  alert("You meet the requirements.");
} else {
  alert("You do not meet the requirements.");
}
