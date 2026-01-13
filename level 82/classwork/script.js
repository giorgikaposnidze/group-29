// დავალება N1
const numbers = [3, 7, 10, 15, 22];

// 1
console.log(numbers.some(num => num % 2 === 0));

// 2
console.log(numbers.every(num => num % 2 === 0));





// დავალება N2
const numbers2 = [1, 2, 3, 4, 5];

console.log(numbers2.map((num, index) => {return `NUM: ${num}, INDEX: ${index}`}))





// დავალება N3
const numbers3 = [3, 5, 12, 20, 7, 25, 18, 40, 9, 50];

console.log(numbers3.filter(num => num % 5 === 0));