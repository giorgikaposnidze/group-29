// 1
function task1() {
  let userInput = prompt("Enter any value:");
  console.log("Input value:", userInput);
  console.log("Type of input:", typeof userInput);

  let numberValue = Number(userInput);
  console.log("Converted to number:", numberValue);
  console.log("Type of converted value:", typeof numberValue);
}

// 2
function discountFunc() {
  let ageInput = prompt("Enter your age:");
  let age = Number(ageInput);

  if (age < 18) {
    alert("Discount: 20%");
  } else if (age >= 18 && age < 65) {
    alert("Discount: 5%");
  } else {
    alert("Discount: 10%");
  }
}

// 3
function compareNums() {
  let input1 = prompt("Enter first number:");
  let input2 = prompt("Enter second number:");

  let num1 = Number(input1);
  let num2 = Number(input2);

  if (num1 > num2) {
    alert(num1);
  } else if (num2 > num1) {
    alert(num2);
  } else {
    alert("Numbers are equal");
  }
}
