function computeWithEval(expressions) {
  const results = [];

  for (let expr of expressions) {
    try {
      const result = eval(expr);
      results.push(result);
    } catch {
      results.push(`Invalid expression: "${expr}"`);
    }
  }

  return results;
}

const operations = ["2 + 3", "4 * 5 - 2", "10 / 2 + 3", "7 * (2 + 3)"];
console.log(computeWithEval(operations));
