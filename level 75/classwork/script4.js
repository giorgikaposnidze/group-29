function outerFunction() {
  const message = "Scope chaining in action!";

  function innerFunction() {
    console.log(message);
  }

  innerFunction();
}

outerFunction();