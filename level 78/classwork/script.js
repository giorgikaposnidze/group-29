// 1
// let word1 = prompt("Enter first word: ");
// let word2 = prompt("Enter second word: ");
// let word3 = prompt("Enter third word: ");
// let word4 = prompt("Enter fourth word: ");
// let word5 = prompt("Enter fifth word: ");

// console.log(word1.concat(word2, word3, word4, word5));


// 2
// let fullname = "giorgikaposnidze"

// console.log(fullname.includes("GIORGI"))

// 3
let word = prompt("enter word:");
let boolInput = prompt("enter True or False:");

let flag = boolInput.toLowerCase() === "true";

let result = flag ? word.repeat(10) : word.repeat(5);

console.log("result:", result);