// 1
const name = "giorgi kaposnidze"
const name2 = "giorgi"
const name3 = "GIORGI"
const name4 = "kaposnidze"
const name5 = "KAPOSNIDZE"

console.log(name.startsWith(name2));
console.log(name.startsWith(name3));


console.log(name.startsWith(name4));
console.log(name.startsWith(name5));

// 2
const personalInfo = [{ name: "Giorgi", surname: "Kaposnidze", age: 11 }];

const favoriteActivities = ["coding", "programming"];

const randomNumbers = [7, 42, 13, 88, 100];

console.log([].concat(personalInfo, favoriteActivities, randomNumbers));

// 3
const mixedArray = ["str", 2025, true, [1, 2, 3], { name: "giorgi", age: 25 }, function () { return "this is function"; }];

mixedArray.forEach((element, index) => {
  const value = typeof element === "function" ? element() : element;
  console.log(value);
});
