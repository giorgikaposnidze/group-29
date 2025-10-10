function scopeTest() {
  var a = "var in function";
  let b = "let in function";
  const c = "const in function";

  console.log(a);
  console.log(b);
  console.log(c);
}

scopeTest();

{
  var x = "var in block";
}
console.log(x);

{
  let y = "let in block";
}
console.log(y);

{
  const z = "const in block";
}
console.log(z);