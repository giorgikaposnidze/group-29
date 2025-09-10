//  1)

let counter = 0;

let intervalId = setInterval(function() {
    counter += 2;
    console.log(counter);

    if (counter === 40) {
        clearInterval(intervalId);
        console.log("Interval stopped");
    }
}, 1500);

// 2)

// with html

const myArray = [
    "Hello",
    42,
    true,
    {name: "Giorgi"}
    [1, 2, 3]
];

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);

// 3)

const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2");
const para3 = document.getElementById("para3");

const texts = ["hi", "hello", "hello:)"];

para1.textContent = texts[0];
para2.textContent = texts[1];
para3.textContent = texts[2];