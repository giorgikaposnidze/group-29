// 1
setTimeout(() => {
  console.log("Hello");
}, 2000);

// 2
setTimeout(() => {
  const p = document.getElementById("myParagraph");
  if (p) {
    p.textContent = "Text changed!";
  }
}, 1000);

// 3
setTimeout(() => {
  alert("This is an alert after 3 seconds!");
}, 3000);

// 4
setTimeout(() => {
  console.log("Time’s up!");
}, 5000);

// 5
localStorage.setItem("username", "Giorgi");

const savedUsername = localStorage.getItem("username");
const display = document.getElementById("usernameDisplay");
if (display) {
  display.textContent = `Saved username: ${savedUsername}`;
}

localStorage.removeItem("username");

localStorage.clear();