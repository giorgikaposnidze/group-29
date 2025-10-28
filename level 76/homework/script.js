// 1
let userExpression = prompt("Enter a math expression (e.g., 3 + 5 * 2):");
let result1 = eval(userExpression);
console.log("Result of your expression:", result1);

// 2
function simpleCalculator() {
  let expression = prompt("Calculator: Enter an expression to evaluate:");
  try {
    let result = eval(expression);
    console.log("Calculator result:", result);
  } catch (e) {
    console.log("Invalid expression:", e.message);
  }
}
simpleCalculator();

// 3
let expr = "10 + 5";
let result2 = eval(expr);
console.log(`Evaluating "${expr}":`, result2);

// 4
let comparison = eval("10 > 3");
console.log(`Is 10 > 3?`, comparison);

// 5
try {
  let invalid = eval("2 ++ 3");
  console.log("Result of '2 ++ 3':", invalid);
} catch (e) {
  console.log("Error with '2 ++ 3':", e.message);
}

// 6
let userInput = prompt("Enter a number (as text):");
let floatNum = parseFloat(userInput);
console.log("Converted to float:", floatNum);

// 7
let pi = parseFloat("3.14");
console.log('parseFloat("3.14"):', pi);

// 8
let mixed1 = parseFloat("42abc");
console.log('parseFloat("42abc"):', mixed1);

// 9
let mixed2 = parseFloat("abc42");
console.log('parseFloat("abc42"):', mixed2);

// 10
let nums = ["10.5", "20.2", "30.8"];
let sum = nums.reduce((acc, val) => acc + parseFloat(val), 0);
console.log("Sum of float strings:", sum);

// 11
let int1 = parseInt("25.9");
console.log('parseInt("25.9"):', int1);

// 12
let int2 = parseInt("100abc");
console.log('parseInt("100abc"):', int2);

// 13
let int3 = parseInt("abc100");
console.log('parseInt("abc100"):', int3);

// 14
let intStrings = ["10", "20", "30"];
let total = intStrings.reduce((acc, val) => acc + parseInt(val), 0);
console.log("Sum of integer strings:", total);