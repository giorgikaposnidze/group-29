function concatenateStrings() {
  let result = '';
  for (const arg of arguments) {
    if (typeof arg === 'string') {
      result += arg;
    }
  }
  return result;
}

console.log(concatenateStrings("Hello", 123, " ", "World", true));