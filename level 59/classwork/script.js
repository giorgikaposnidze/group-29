// 1
let = prompt("Enter a number:");
let = Number(input);

if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}


// 2 

let person = {
  name: {
    firstName: "Giorgi",
    lastName: "Kaposnidze",
  },
  age: {
    years: 30,
    months: 6,
  }
};

person.name.nickname = "Gio";

console.log(person);



// 3

document.getElementById("submitBtn").addEventListener("click", function() {

  const input = document.querySelector('[name="username"]');

  alert(input.value);

  input.value = "";
});
