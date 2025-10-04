function maxNumbers(a, b, c, d, e, f, g, h, i, j) {
  let max = -Infinity;
  for (const num of arguments) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log(maxNumbers);