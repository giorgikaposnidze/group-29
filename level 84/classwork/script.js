// N1
let input = prompt("Please enter a number:");

let number = parseFloat(input);
console.log(number);

let intPart = Math.trunc(number);
console.log( integerPart);

let result = Math.pow(integerPart, integerPart);
console.log(result);

// N2

function processNumbers() {
    let num1 = parseFloat(prompt("Enter the first decimal number:"));
    let num2 = parseFloat(prompt("Enter the second decimal number:"));

    // Step 1
    let powered = Math.pow(num1, 3);

    // Step 2
    let truncated = Math.trunc(powered);

    // Step 3
    let floored = Math.floor(num2);

    // Step 4
    let minimum = Math.min(truncated, floored);
    let maximum = Math.max(truncated, floored);
sults
    console.log(truncated);
    console.log(floored);
    console.log(minimum);
    console.log(maximum);
}

processNumbers();