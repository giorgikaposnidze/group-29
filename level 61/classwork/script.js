// 1)

    let num = 0;

while (num < 100) {
  console.log(num);
  num += 5; 
} 

// 2)
  
    function correctUserPassword() {
  let correct = "goa123";
  let tries = 0;
  let input;

  while (input !== correct) {
    input = prompt("Enter password:");
    tries++;
  }

  alert("Correct guess! Tries: " + tries);
}

window.onload = correctUserPassword;