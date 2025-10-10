// 1
const multiply = function(a, b) {
  return a * b;
};
console.log("1. Multiply 4 * 5 =", multiply(4, 5));

// 2
setInterval(function() {
  console.log("2. Logging every 2 seconds...");
}, 2000);

// 3
document.getElementById("alertBtn").addEventListener("click", function() {
  alert("3. Button was clicked!");
});

// 4
(function() {
  console.log("4. Hello, world!");
})();

// 5
(function(num) {
  console.log("5. Square of", num, "is", num * num);
})(6);

// 6
(function(arr) {
  const sum = arr.reduce((acc, val) => acc + val, 0);
  console.log("6. Sum of array:", sum);
})([1, 2, 3, 4, 5]);

// 7
function localScopeExample() {
  let localVar = "I'm local!";
}
localScopeExample();
try {
  console.log("7. Accessing localVar:", localVar);
} catch (e) {
  console.log("7. Error accessing localVar:", e.message);
}

// 8
function outerFunction() {
  let count = 0;
  console.log("8. Before innerFunction:", count);

  function innerFunction() {
    count += 10;
  }

  innerFunction();
  console.log("8. After innerFunction:", count);
}
outerFunction();

// 9
function scopeTest() {
  if (true) {
    var x = "var scoped";
    let y = "let scoped";
    const z = "const scoped";
  }

  console.log("9. var x:", x);
  try {
    console.log("9. let y:", y);
  } catch (e) {
    console.log("9. Error accessing let y:", e.message);
  }

  try {
    console.log("9. const z:", z);
  } catch (e) {
    console.log("9. Error accessing const z:", e.message);
  }
}
scopeTest();