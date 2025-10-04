// 1
function calculate(a, b, operator) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Cannot divide by zero';
    case '%': return a % b;
    default: return 'Invalid operator';
  }
}

// 2
function checkChar(char) {
  const vowels = 'aeiouAEIOU';
  if (!/[a-zA-Z]/.test(char)) return 'Not a letter';
  return vowels.includes(char) ? 'Vowel' : 'Consonant';
}

// 3
function getSeason(month) {
  switch (month) {
    case 12: case 1: case 2: return 'Winter';
    case 3: case 4: case 5: return 'Spring';
    case 6: case 7: case 8: return 'Summer';
    case 9: case 10: case 11: return 'Autumn';
    default: return 'Invalid month';
  }
}

// 4
function getFruitPrice(fruit) {
  switch (fruit.toLowerCase()) {
    case 'apple': return '$1.50';
    case 'banana': return '$0.75';
    case 'mango': return '$2.00';
    default: return 'Fruit not available';
  }
}

// 5
const isEven = num => num % 2 === 0 ? 'Even' : 'Odd';

// 6
const checkSign = num => num > 0 ? 'Positive' : num < 0 ? 'Negative' : 'Zero';

// 7
const greater = (a, b) => a > b ? a : b;

// 8
const canVote = age => age >= 18 ? 'Eligible to vote' : 'Not eligible';

// 9
const square = num => num * num;

// 10
const sum = (a, b) => a + b;

// 11
const checkEvenOdd = num => num % 2 === 0 ? 'Even' : 'Odd';

// 12
const maxOfTwo = (a, b) => a > b ? a : b;

// 13
function sumAll() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// 14
function maxValue() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) max = arguments[i];
  }
  return max;
}

// 15
function minValue() {
  let min = Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < min) min = arguments[i];
  }
  return min;
}

// 16
function countArgs() {
  return arguments.length;
}