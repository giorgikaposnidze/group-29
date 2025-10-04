const calculator = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : 'Division by zero is not allowed';
    default:
      return 'Invalid operator';
  }
};

console.log(calculator(10, 5,));