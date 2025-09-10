// 1. Even or Odd
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(num + " is Even");
  } else {
    console.log(num + " is Odd");
  }
}

// 2
function assignGrade(score) {
  if (score >= 90) {
    console.log("Grade A");
  } else if (score >= 80) {
    console.log("Grade B");
  } else if (score >= 70) {
    console.log("Grade C");
  } else if (score >= 60) {
    console.log("Grade D");
  } else {
    console.log("Fail");
  }
}

// 3
function findLargest(a, b, c) {
  if (a === b && b === c) {
    console.log("All numbers are equal: " + a);
    return;
  }
  let largest = a;
  if (b > largest) largest = b;
  if (c > largest) largest = c;
  console.log("Largest number is: " + largest);
}

// 4
function checkVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (char.length !== 1) {
    console.log("Please enter a single character");
    return;
  }
  const lowerChar = char.toLowerCase();
  if (vowels.includes(lowerChar)) {
    console.log(char + " is a vowel");
  } else {
    console.log(char + " is a consonant");
  }
}

// 5
function checkDivisibility(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log(num + " is divisible by both 3 and 5");
  } else if (num % 3 === 0) {
    console.log(num + " is divisible by 3 only");
  } else if (num % 5 === 0) {
    console.log(num + " is divisible by 5 only");
  } else {
    console.log(num + " is not divisible by 3 or 5");
  }
}

// 6
function ageCategory(age) {
  if (age >= 0 && age <= 12) {
    console.log("Child");
  } else if (age >= 13 && age <= 19) {
    console.log("Teenager");
  } else if (age >= 20 && age <= 59) {
    console.log("Adult");
  } else if (age >= 60) {
    console.log("Senior");
  } else {
    console.log("Invalid age");
  }
}

// 7
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// 8
let num = 2;
while (num <= 10) {
  console.log(num);
  num += 2;
}

// 9
let count = 10;
while (count >= 1) {
  console.log(count);
  count--;
}

// 10
for (let j = 1; j <= 10; j++) {
  console.log(j);
}

// 11
for (let k = 1; k <= 5; k++) {
  console.log(3 * k);
}

// 12
for (let l = 10; l >= 1; l--) {
  console.log(l);
}

// 13
for (let m = 1; m <= 20; m++) {
  if (m % 2 === 0) {
    console.log(m);
  }
}

// 14
let sum = 0;
for (let n = 1; n <= 5; n++) {
  sum += n;
}
console.log("Sum from 1 to 5 is:", sum);
